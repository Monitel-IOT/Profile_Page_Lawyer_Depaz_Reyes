'use client';
import React, { useState } from 'react';
import AdminDashboard from '@/components/UI/pages/admin/AdminDashBoard/AdminDashboard';
import AccessForm from '@/components/UI/pages/admin/AccessForm/AccessForm';

const Admin: React.FC = () => {
  const [hasAccess, setHasAccess] = useState(false);
  const handleAccess = (accessGranted: boolean) => {
    setHasAccess(accessGranted);
  };

  return (
    <div className="bg-black">
      {!hasAccess ? (
        <AccessForm allowAccess={handleAccess} />
      ) : (
        <AdminDashboard />
      )}
    </div>
  );
};

export default Admin;
