import Text from '@/components/UI/atoms/Text/Text';
import Title from '@/components/UI/atoms/Title/Title';
import React, { useState } from 'react';

interface AccessFormProps {
  allowAccess: (accessGranted: boolean) => void;
}

const AccessForm: React.FC<AccessFormProps> = ({ allowAccess }) => {
  const [password, setPassword] = useState('');

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleAccess = () => {
    const accessPassword: string | undefined =
      process.env.NEXT_PUBLIC_ACCESS_PASSWORD;
    console.log('access ', accessPassword);
    console.log('pass ', password);
    if (password === accessPassword) {
      allowAccess(true);
    } else {
      allowAccess(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center bg-black h-[calc(100vh_-_104px)]">
      <Title variant="h2" className="text-white mb-10">
        LOGIN
      </Title>
      <input
        type="password"
        placeholder="Ingrese la contraseña"
        value={password}
        onChange={handlePasswordChange}
        className="border border-gray-300 rounded-md px-4 py-2 mb-4"
      />
      <button
        onClick={handleAccess}
        className="text-white font-bold p-[20px] mt-[30px] rounded-full bg-gradient-to-r from-dorado to-yellow-950 shadow-xl"
      >
        <Text variant="lg">Acceder</Text>
      </button>
    </div>
  );
};

export default AccessForm;
