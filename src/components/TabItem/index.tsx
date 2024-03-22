import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {
  IconAkun,
  IconHome,
  IconPesanan,
  IconAkunActive,
  IconHomeActive,
  IconPesananActive,
} from '~/assets';
import React from 'react';
import {DEFAULT_COLOR, DISABLE_COLOR} from '~/utils/constant';

type TabItemProps = {
  isFocused: boolean;
  onPress: () => void;
  onLongPress: () => void;
  label: string;
};

const TabItem = ({isFocused, onPress, onLongPress, label}: TabItemProps) => {
  const Icon = () => {
    if (label === 'Home') return isFocused ? <IconHomeActive /> : <IconHome />;
    if (label === 'Akun') return isFocused ? <IconAkunActive /> : <IconAkun />;
    if (label === 'Pesanan')
      return isFocused ? <IconPesananActive /> : <IconPesanan />;

    return <IconHome />;
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      onLongPress={onLongPress}
      style={styles.container}>
      <Icon />
      <Text
        style={{
          fontSize: 13,
          marginTop: 8,
          color: isFocused ? DEFAULT_COLOR : DISABLE_COLOR,
        }}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default TabItem;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
