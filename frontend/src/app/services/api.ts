import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

type Task = {
  id: string;
  title: string;
  description: string;
  completed: boolean;
};

type LoginResponse = {
  token: string;
};

type SignupResponse = {
  token: string;
};

type TaskResponse = Task[];

export type { Task, LoginResponse, SignupResponse };

type CreateTaskRequest = {
  title: string;
  description: string;
};

type UpdateTaskRequest = {
  id: string;
  title: string;
  description: string;
  completed: boolean;
};

type Credentials = {
  username: string;
  password: string;
};

export type { CreateTaskRequest, UpdateTaskRequest };

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
  endpoints: (builder) => ({
    login: builder.mutation<LoginResponse, Credentials>({
      query: ({ username, password }) => ({
        url: '/auth/login',
        method: 'POST',
        body: { username, password },
      }),
    }),
    signup: builder.mutation<SignupResponse, Credentials>({
      query: ({ username, password }) => ({
        url: '/auth/signup',
        method: 'POST',
        body: { username, password },
      }),
    }),
    tasks: builder.query<TaskResponse, void>({
      query: () => '/tasks',
    }),
    createTask: builder.mutation<Task, CreateTaskRequest>({
      query: ({ title, description }) => ({
        url: '/tasks',
        method: 'POST',
        body: { title, description },
      }),
    }),
    updateTask: builder.mutation<Task, UpdateTaskRequest>({
      query: ({ id, title, description, completed }) => ({
        url: `/tasks/${id}`,
        method: 'PUT',
        body: { title, description, completed },
      }),
    }),
    deleteTask: builder.mutation<void, string>({
      query: (id) => ({
        url: `/tasks/${id}`,
        method: 'DELETE',
      }),
    }),
  }),
});

export const { useLoginMutation, useSignupMutation, useTasksQuery, useCreateTaskMutation, useUpdateTaskMutation, useDeleteTaskMutation } = api;
