import React from 'react';
import { Button, Container, Form, Stack } from 'react-bootstrap';
import {
  useForm,
  FormProvider,
  Controller,
} from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const validationSchema = yup.object().shape({
  username: yup.string().required('Username is required').min(8),
  email: yup.string().email('Not a valid emal').required('Email is required'),
  subject: yup.string().required('Subject is required'),
  message: yup.string().required('Message is required'),
});

type formValues = {
  username: string;
  email: string;
  subject: string;
  message: string;
};

export const FormPage = () => {
  const methods = useForm<formValues>({
    defaultValues: {},
    resolver: yupResolver(validationSchema),
    mode: 'onSubmit',
  });

  const { control } = methods;

  const handleSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <Container className={'py-5'}>
      <Stack gap={3}>
        <FormProvider {...methods}>
          <Form
            noValidate
            onSubmit={methods.handleSubmit(handleSubmit)}
          >
            <Controller
              control={control}
              name="username"
              render={({
                field: { onChange, onBlur, value, ref },
                fieldState: { error },
              }) => (
                <Form.Group className="mb-3">
                  <Form.Label>User Name</Form.Label>
                  <Form.Control
                    onChange={onChange}
                    onBlur={onBlur}
                    value={value}
                    type="text"
                    placeholder="Enter username..."
                    isInvalid={!!error}
                  />
                  <Form.Text className="text-danger">
                    {error?.message}
                  </Form.Text>
                </Form.Group>
              )}
            />
            <Controller
              control={control}
              name="email"
              render={({
                field: { onChange, onBlur, value, ref },
                fieldState: { error },
              }) => (
                <Form.Group className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    onChange={onChange}
                    onBlur={onBlur}
                    value={value}
                    type="email"
                    placeholder="Enter email..."
                    isInvalid={!!error}
                  />
                  <Form.Text className="text-danger">
                    {error?.message}
                  </Form.Text>
                </Form.Group>
              )}
            />
            <Controller
              control={control}
              name="subject"
              render={({
                field: { onChange, onBlur, value, ref },
                fieldState: { error },
              }) => (
                <Form.Group className="mb-3">
                  <Form.Label>Subject</Form.Label>
                  <Form.Control
                    onChange={onChange}
                    onBlur={onBlur}
                    value={value}
                    type="text"
                    placeholder="Enter subject..."
                    isInvalid={!!error}
                  />
                  <Form.Text className="text-danger">
                    {error?.message}
                  </Form.Text>
                </Form.Group>
              )}
            />
            <Controller
              control={control}
              name="message"
              render={({
                field: { onChange, onBlur, value, ref },
                fieldState: { error },
              }) => (
                <Form.Group className="mb-3">
                  <Form.Label>Message</Form.Label>
                  <Form.Control
                    onChange={onChange}
                    onBlur={onBlur}
                    value={value}
                    type="text"
                    as="textarea"
                    placeholder="Enter message..."
                    isInvalid={!!error}
                  />
                  <Form.Text className="text-danger">
                    {error?.message}
                  </Form.Text>
                </Form.Group>
              )}
            />

            <Button type="submit">Submit form</Button>
          </Form>
        </FormProvider>
      </Stack>
    </Container>
  );
};
