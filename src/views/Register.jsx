import { useState } from 'react';
import { Main } from '../containers/Main';
import { SetUserForm } from '../components/SetUserForm';
import { Stack, Step, StepLabel, Stepper, Typography } from '@mui/material';
import { CreateUserForm } from '../components/CreateUserForm';

export const Register = () => {
    const [step, setStep] = useState(0);
    const labels = ['Cuenta', 'Información Personal'];
    const handleSteps = (step) => {
        switch (step) {
            case 0:
                return <CreateUserForm handleSteps={handleSteps} setStep={setStep} />;
            case 1:
                return <SetUserForm />;
            default:
                throw new Error('Unknown step');
        }
    };
    return (
        <Main>
            <Stack gap="2rem">
                <Typography fontWeight="bold" variant="h4" textAlign="center">
                    Crea tu cuenta
                </Typography>
                <Stepper activeStep={step} alternativeLabel>
                    {labels.map((label) => (
                        <Step key={label}>
                            <StepLabel>{label}</StepLabel>
                        </Step>
                    ))}
                </Stepper>
                {handleSteps(step)}
            </Stack>
        </Main>
    );
};
