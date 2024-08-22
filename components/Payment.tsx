import { PaymentProps } from '@/types/type';
import { Text, View } from 'react-native';
import CustomButton from './CustomButton';

const openPaymentSheet = async () => {};

const Payment = () => {
  return (
    <>
      <CustomButton
        title='Confirm Ride'
        className='my-10'
        onPress={openPaymentSheet}
      />
    </>
  );
};

export default Payment;
