import {Fragment} from "react";
import {ErrorMessage, Field, Form, Formik} from 'formik';
import * as yup from 'yup';

const Forms = () => {

    const formInitialSchema = {
        firstName: '',
        lastName: '',
        email: '',
        dob: "",
	    phoneNumber: "",
	    address: "",
	    collegeName: "",
	    socialmedia: "",
	    profileImage: "",
        comment: '',
    }

    const formValidationSchema = yup.object().shape({
        firstName: yup.string().required('First Name is required'),
        lastName: yup.string().required('Last Name is required'),
        email: yup.string().required('Email is required').email("Please enter Valid email"),
        dob: yup.string().required('DOB is required'),
        phoneNumber: yup.string().required('Mobile Number is required'),
        address: yup.string().required('Address is required'),
        collegeName: yup.string().required('College Name is required'),
        socialmedia: yup.string().required('Socialmedia Name is required'),
        profileImage: yup.string().required('Profile Image Name is required'),
        comment: yup.string().required('Comment is required')
        
    });


    const handleFormSubmit = (values) => {
        console.log("Submitted values", values)
    }

    return (
        <Fragment>

            <div className="container">
                {/* <div className="col-md-12"> 
                    <h1 className="text-center">Edit</h1>
                </div> */}

                <div className="col-md-8 offset-md-2">
                    <Formik initialValues={formInitialSchema}
                            validationSchema={formValidationSchema}
                            onSubmit={(values => handleFormSubmit(values))}>

                        <Form>
   
                        <div className="row">              
                            <div className="col-md-6 mt-2">
                                <Field type="text"
                                       name="firstName"
                                       placeholder="Enter your First Name"
                                       className="form-control"/>

                                <p className="text-danger">
                                    <ErrorMessage name="firstName"/>
                                </p>
                            </div>
                            <div className="col-md-6 mt-2">
                                <Field type="text"
                                       name="lastName"
                                       placeholder="Enter your Last Name"
                                       className="form-control"/>

                                <p className="text-danger">
                                    <ErrorMessage name="lastName"/>
                                </p>
                            </div>
                            </div>

                        <div className="row"> 
                            <div className="col-md-6 mt-2">
                                <Field type="email"
                                       name="email"
                                       placeholder="Enter your Email"
                                       className="form-control"/>
                                <p className="text-danger">
                                    <ErrorMessage name="email"/>
                                </p>
                            </div>
                            <div className="col-md-6 mt-2">
                                <Field type="date"
                                       name="dob"
                                       placeholder="Enter your DOB"
                                       className="form-control"/>
                                <p className="text-danger">
                                    <ErrorMessage name="dob"/>
                                </p>
                            </div>
                            </div>

                            <div className="row">
                            <div className="col-md-6 mt-2">
                                <Field type="text"
                                       name="phoneNumber"
                                       placeholder="Enter your MobileNumber"
                                       className="form-control"/>
                                <p className="text-danger">
                                    <ErrorMessage name="phoneNumber"/>
                                </p>
                            </div>
                            <div className="col-md-6 mt-2">
                                <Field type="text"
                                       name="address"
                                       placeholder="Enter your address"
                                       className="form-control"/>
                                <p className="text-danger">
                                    <ErrorMessage name="address"/>
                                </p>
                            </div>
                            </div>

                            <div className="row">
                            <div className="col-md-6 mt-2">
                                <Field type="text"
                                       name="collegeName"
                                       placeholder="Enter your College Name"
                                       className="form-control"/>
                                <p className="text-danger">
                                    <ErrorMessage name="collegeName"/>
                                </p>
                            </div>
                            <div className="col-md-6 mt-2">
                                <Field type="text"
                                       name="socialmedia"
                                       placeholder="Enter your Social Media"
                                       className="form-control"/>
                                <p className="text-danger">
                                    <ErrorMessage name="Social Media"/>
                                </p>
                            </div>
                            </div>

                            <div className="row">
                            <div className="col-md-6 mt-2">
                                <Field type="text"
                                       name="profileImage"
                                       placeholder="Enter your Profile Image"
                                       className="form-control"/>
                                <p className="text-danger">
                                    <ErrorMessage name="profileImage"/>
                                </p>
                            </div>
                            <div className="col-md-6 mt-2">
                                <Field type="text"
                                       name="comment"
                                       placeholder="Enter your Comment"
                                       className="form-control"/>
                                <p className="text-danger">
                                    <ErrorMessage name="comment"/>
                                </p>
                            </div>
                            </div>

                            <div className="col-md-12 mt-2">
                                <button className="btn btn-primary btn-block"
                                        type="submit"
                                >
                                    Submit Details
                                </button>
                            </div>

                        </Form>

                    </Formik>
                </div>


            </div>


        </Fragment>

    )
}

export default Forms;


// import * as React from 'react';
// import Box from '@mui/material/Box';
// import MenuItem from '@mui/material/MenuItem';
// import TextField from '@mui/material/TextField';
// import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import InstagramIcon from '@mui/icons-material/Instagram';
// import FacebookIcon from '@mui/icons-material/Facebook';
// import InputAdornment from '@mui/material/InputAdornment';
// import AccountCircle from '@mui/icons-material/AccountCircle';

// const categories = [
//     {
//       value: 'Linkdin',
//       label: <LinkedInIcon />,
//     },
//     {
//       value: 'Instagram',
//       label: <InstagramIcon />,
//     },
//     {
//       value: 'Facebook',
//       label: <FacebookIcon />,
//     },
    
//   ];

// export default function MultilineTextFields() {
//   const [value, setValue] = React.useState('Controlled');
//   const [category, setCategory] = React.useState('EUR');

//   const handleChange = (event) => {
//     setValue(event.target.value);
//     setCategory(event.target.value);
//   };

//   return (
//     <Box
//       component="form"
//       sx={{
//         '& .MuiTextField-root': { m: 4, width: '50ch' },
//       }}
//       Validate
//       autoComplete="off"
//     >
//       <div>
//         <TextField
//           id="outlined-multiline-flexible"
//           label="First Name"
//           multiline
//           maxRows={2}
//           value={value}
//           onChange={handleChange}
//         />
//         <TextField
//           id="outlined-multiline-flexible"
//           label="Last Name"
//           multiline
//           maxRows={2}
//           value={value}
//           onChange={handleChange}
//         />
//         <TextField
//           id="outlined-multiline-flexible"
//           label="First Name"
//           multiline
//           maxRows={2}
//           value={value}
//           onChange={handleChange}
//         />
//         <TextField
//           id="outlined-multiline-flexible"
//           label="First Name"
//           multiline
//           maxRows={2}
//           value={value}
//           onChange={handleChange}
//         />
        
//         <TextField
//           id="outlined-select-currency"
//           select
//           label="Select"
//           value={category}
//           onChange={handleChange}
//           helperText="Please select your currency"
//         >
//           {categories.map((option) => (
//             <MenuItem key={option.value} value={option.value}>
//               {option.label}
//             </MenuItem>
//           ))}
//         </TextField>

//         <TextField
//           id="outlined-multiline-static"
//           label="Comment"
//           multiline
//           rows={4}
//           defaultValue="Default Value"
//           onChange={handleChange}
//         />
//       </div>

//       <div>
//       <TextField
//         id="input-with-icon-textfield"
//         label="TextField"
//         InputProps={{
//           startAdornment: (
//             <InputAdornment position="start">
//               <AccountCircle />
//             </InputAdornment>
//           ),
//         }}
//         variant="standard"
//       />
//       </div>
      
//       <div>
//       <TextField 
//       label="Social Media" 
//       color="secondary" 
//       focused 
//       InputProps={{
//         startAdornment: (
//           <InputAdornment position="start">
//             <LinkedInIcon />
//           </InputAdornment>
//         ),
//       }}
      
//       />
//       </div>


//       <Box
//       sx={{
//         width: 500,
//         maxWidth: '100%',
//       }}
//     >
//       <TextField 
//       id="fullWidth"
//       label="Social Media" 
//       color="secondary" 
//       focused 
//       InputProps={{
//         startAdornment: (
//           <InputAdornment position="start">
//             <LinkedInIcon />
//           </InputAdornment>
//         ),
//       }}
      
//       />
//     </Box>

     
//     </Box>
//   );
// }


