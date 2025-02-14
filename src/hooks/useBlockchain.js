import { useContext } from 'react';
import BlockchainContext from '../contexts/BlockchainContext';

const useBlockchain = () => {
  const context = useContext(BlockchainContext);
  if (!context) {
    throw new Error('useBlockchain must be used within a BlockchainProvider');
  }
  return context;
};

export default useBlockchain;
