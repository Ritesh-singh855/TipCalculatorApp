import React  from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { setBillAmount, setTipPercentage, setNumberOfPeople } from '../../redux/action';
import { styles } from './style';

const TipCalculator = () => {
  const dispatch = useDispatch();
  const { billAmount, tipPercentage, numberOfPeople } = useSelector(state => state.tipCalculator);

  const handleSetBillAmount = (amount) => {
    dispatch(setBillAmount(amount));
  };

  const handleSetTipPercentage = (percentage) => {
    dispatch(setTipPercentage(percentage));
  };

  const handleSetNumberOfPeople = (number) => {
    dispatch(setNumberOfPeople(parseInt(number) || 1));
  };

  const calculateTip = () => {
    const bill = parseFloat(billAmount);
    if (isNaN(bill)) return 0;
    return (bill * tipPercentage) / 100;
  };

  const calculateTotal = () => {
    const bill = parseFloat(billAmount);
    if (isNaN(bill)) return 0;
    return bill + calculateTip();
  };

  const calculatePerPerson = () => {
    return calculateTotal() / numberOfPeople;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tip Calculator</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter bill amount"
        keyboardType="numeric"
        value={billAmount}
        onChangeText={handleSetBillAmount}
      />
      <View style={styles.tipButtons}>
        {[5, 10, 15, 25, 50].map((percentage) => (
          <Button
            key={percentage}
            title={`${percentage}%`}
            onPress={() => handleSetTipPercentage(percentage)}
            color={tipPercentage === percentage ? '#007AFF' : '#A9A9A9'}
          />
        ))}
      </View>
      <TextInput
        style={styles.input}
        placeholder="Number of people"
        keyboardType="numeric"
        value={numberOfPeople}
        onChangeText={handleSetNumberOfPeople}
      />
      <View style={styles.resultContainer}>
        <Text style={styles.resultText}>Tip Amount: ${calculateTip().toFixed(2)}</Text>
        <Text style={styles.resultText}>Total Amount: ${calculateTotal().toFixed(2)}</Text>
        <Text style={styles.resultText}>Amount Per Person: ${calculatePerPerson().toFixed(2)}</Text>
      </View>
    </View>
  );
};

export default TipCalculator;