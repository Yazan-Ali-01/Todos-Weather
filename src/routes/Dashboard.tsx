// src/routes/Dashboard.tsx or src/views/Dashboard.tsx
import React from 'react';
import { TodoList } from '@features/TodoList';
import { Navigate } from 'react-router-dom';
import { Typography } from '@mui/material';
import Weather from '@features/Weather/components/Weather';
// import { WeatherDisplay } from 'features/Weather';

const Dashboard = () => {
  return (
    <div className="">
      <main className="flex flex-col md:flex-row max-h-screen ">
        <section className="w-full md:w-3/5 ">
          <Typography variant="h4" textAlign="center">
            Todo List
          </Typography>
          <TodoList />
        </section>
        <div className="inline-block h-screen min-h-[1em] w-0.5 self-stretch bg-neutral-300 "></div>
        <section className="w-full md:w-2/5">
          <Typography variant="h4" textAlign="center">
            Weather Provider
          </Typography>
          <Weather />
        </section>
      </main>
    </div>
  );
};

export const RedirectToDashboard = () => <Navigate to="/dashboard" replace />;

export default Dashboard;
