import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import { usePostBlogsMutation } from "../../State/api";

import * as yup from "yup";

export const Writeblog = () => {

    const [postBlog, { isLoading }] = usePostBlogsMutation();
  
    const handleFormSubmit = async (values) => {
      
      try {
        await postBlog(values).unwrap();  // Send the form values to the server
        alert('Blog created successfully!');
      } catch (error) {
        console.error('Error creating blog:', error);
      }
    };

  return (
    <Box m="20px">

      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={checkoutSchema}
      >
        {({
          values,
          handleBlur,
          handleChange,
          handleSubmit,
          setFieldValue,
        }) => (
          <form onSubmit={(e) => {
            e.preventDefault(); 
            setFieldValue("author", "hihello"); 
            handleSubmit(); 
        }}>
            <Box
              display="grid"
              gap="30px"
              gridTemplateColumns="repeat(4, minmax(0, 1fr))"
              sx={{
                "& > div": { gridColumn: "span 4" },
              }}
            >
              <TextField
                fullWidth
                type="text"
                placeholder="Title"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.title}
                name="title"
              />
              <TextField
                id="outlined-multiline-static"
                type="text"
                multiline
                rows={4}
                placeholder="Write blog"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.body}
                name="body"
                />
            </Box>
            <Box display="flex" justifyContent="end" mt="20px">
              <Button type="submit" sx={{background:"grey",":hover":{background:"whitesmoke"}}} color="black">
                Create New User
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};


const checkoutSchema = yup.object().shape({
  title: yup.string(),
  body: yup.string(),
  author: yup.string(),
});
const initialValues = {
  title: "",
  body: "",
  author:"",
};

