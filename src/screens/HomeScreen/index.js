import React , { useState }  from 'react';
import { View, Text, TextInput, Button, TouchableOpacity  } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { setBillAmount, setTipPercentage, setNumberOfPeople } from '../../redux/action';
import { styles } from './style';

const TipCalculator = () => {
  const dispatch = useDispatch();
  const { billAmount, tipPercentage, numberOfPeople } = useSelector(state => state.tipCalculator);
  const [isNumberOfPeopleValid, setIsNumberOfPeopleValid] = useState(true);

  const handleSetBillAmount = (amount) => {
    dispatch(setBillAmount(amount));
  };

  const handleSetTipPercentage = (percentage) => {
    dispatch(setTipPercentage(percentage));
  };

  const handleSetNumberOfPeople = (number) => {
    const parsedNumber = parseInt(number);
    if (isNaN(parsedNumber) || parsedNumber < 1) {
      setIsNumberOfPeopleValid(false);
      dispatch(setNumberOfPeople(1)); // Default to 1 if invalid
    } else {
      setIsNumberOfPeopleValid(true);
      dispatch(setNumberOfPeople(parsedNumber));
    }
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
        maxLength={7}
        value={numberOfPeople}
        onChangeText={handleSetBillAmount}
      />
       <View style={styles.tipButtons}>
        {[5, 10, 15, 25, 50].map((percentage) => (
          <TouchableOpacity
            key={percentage}
            style={[
              styles.tipButton,
              tipPercentage === percentage && styles.activeButton,
            ]}
            onPress={() => handleSetTipPercentage(percentage)}
          >
            <Text style={styles.buttonText}>{`${percentage}%`}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <TextInput
        style={styles.input}
        placeholder="Number of people"
        keyboardType="numeric"
        value={numberOfPeople}
        onChangeText={handleSetNumberOfPeople}
      />
        {!isNumberOfPeopleValid && (
        <Text style={styles.errorText}>Please enter at least one person.</Text>
      )}
      <View style={styles.resultContainer}>
        <Text style={styles.resultText}>Tip Amount: ₹ {calculateTip().toFixed(2)}</Text>
        <Text style={styles.resultText}>Total Amount: ₹ {calculateTotal().toFixed(2)}</Text>
        <Text style={styles.resultText}>Amount Per Person: ₹ {calculatePerPerson().toFixed(2)}</Text>
      </View>
    </View>
  );
};

export default TipCalculator;