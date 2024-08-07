// import React, { useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// // import { useMutation } from '@tanstack/react-query';
// import { toast } from 'react-toastify';
// import { useNavigate, useLocation } from 'react-router-dom';
// import AccountSetupStep1 from './AccountSetUp1';
// import AccountSetupStep2 from './AccountSetUp2';

// import { updateFormData, updateProfileField } from '../../store/accountSlice';
// // import { accountSetup } from '../../services/api.service';
// import AccountSetupLayout from './Layout';

// function AccountSetup() {
//     const location = useLocation();
//     const isEditing = location.state?.isEditing || false;
//     const previousRoute = location.state?.previousRoute || '/dashboard/overview';
//     const [step, setStep] = useState(location.state?.isEditing ? 2 : 1);

//     // const formData = useSelector((state) => ({
//     //     firstName: state.account.firstName,
//     //     lastName: state.account.lastName,
//     //     businessName: state.account.businessName,
//     //     brandName: state.account.brandName,
//     //     slogan: state.account.slogan,
//     //     designRequirements: state.account.designRequirements,
//     //     niche: state.account.niche,
//     //     otherDetails: state.account.otherDetails,
//     //     fontOptions: state.account.fontOptions,
//     //     colorOptions: state.account.colorOptions,
//     // }));
    
//     const dispatch = useDispatch();
//     // const navigate = useNavigate();

//     // const mutation = useMutation({
//     //     mutationFn: accountSetup,
//     //     onSuccess: (res) => {
//     //         toast.success(res.data.message);
//     //         dispatch(updateFormData())
//     //         if (location.state?.isEditing) {
//     //             navigate(previousRoute, { state: { isEditing: true } });
//     //         } else {
//     //             navigate('/dashboard/overview');
//     //         }
//     //     },
//     //     onError: (error) => {
//     //         toast.error(error.response.data.message);
//     //     }
//     // });

//     const handleNextStep = (newData) => {
//         Object.keys(newData).forEach((key) => {
//             dispatch(updateProfileField({ field: key, value: newData[key] }));
//         });
//         console.log('Form data after next step:', { ...formData, ...newData });
//         setStep((prevStep) => prevStep + 1);
//     };

//     const handlePreviousStep = () => {
//         setStep((prevStep) => prevStep - 1);
//     };

//     const handleSubmit = (updatedFormData) => {
//         Object.keys(updatedFormData).forEach((key) => {
//             dispatch(updateProfileField({ field: key, value: updatedFormData[key] }));
//         });
//         console.log('Submitting form data:', { ...formData, ...updatedFormData });
//         mutation.mutate({...formData});
//     };

//     return (
//         <AccountSetupLayout stepNumber={step} handlePreviousStep={handlePreviousStep}>
//             {step === 1 && <AccountSetupStep1 formData={formData} handleNextStep={handleNextStep} />}
//             {step === 2 && <AccountSetupStep2 formData={formData} handleNextStep={handleSubmit} />}
            
//         </AccountSetupLayout>
//     );
// }

// export default AccountSetup;
