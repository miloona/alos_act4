import {
  FormControl,
  Select,
  TextField,
  Grid,
  Button,
  InputLabel,
} from "@material-ui/core";
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const createPodcastSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Name too Short!")
    .max(100, "Name too Long!")
    .required("Name is Required"),
  about: Yup.string()
    .min(2, "Too Short!")
    .max(500, "Too Long!")
    .required("Description is Required"),
  category: Yup.string().required("Required!"),
  status: Yup.string().required("Required"),
});

export default function CreatePodcast() {
  const formik = useFormik({
    initialValues: {
      name: "",
      status: "Ongoing",
      about: "",
      category: "fiction",
    },
    validationSchema: createPodcastSchema,
    onSubmit: (values) => {
      console.log(values);
      window.axios
        .post("api/podcasts", {
          ...values,
          picture: "http://placehold.it/320x320",
          releaseDate: "Tuesday, November 3, 2015 9:25 AM",
          hosts: [],
          listeners: 0,
        })
        .then((res) => {
          window.location = "/podcasts";
        })
        .catch((err) => console.log(err.response.data.errors));
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <Grid container spacing={1} alignItems="center">
        <Grid item md={12} xs={12}>
          <TextField
            fullWidth
            margin="normal"
            type="text"
            variant="filled"
            label="Name"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            helperText={formik.touched.name && formik.errors.name}
          />
        </Grid>
        <Grid item md={6} xs={12}>
          <FormControl variant="filled" fullWidth>
            <InputLabel shrink id="demo-simple-select-placeholder-label-label">
              Category
            </InputLabel>
            <Select
              native={true}
              name="category"
              labelId="Category"
              variant="filled"
              id="categoty_select"
              displayEmpty
              value={formik.values.categoty}
              onChange={formik.handleChange}
              helperText={formik.touched.category && formik.errors.category}
            >
              <option value={"fiction"}>Fiction</option>
              <option value={"interviews"}>Interviews</option>
              <option value={"series"}>Series</option>
            </Select>
          </FormControl>
        </Grid>
        <Grid item md={6} xs={12}>
          <FormControl variant="filled" fullWidth>
            <InputLabel shrink id="demo-simple-select-placeholder-label-label">
              Status
            </InputLabel>
            <Select
              native={true}
              name="status"
              labelId="Status"
              variant="filled"
              id="status_select"
              value={formik.values.status}
              onChange={formik.handleChange}
              helperText={formik.touched.status && formik.errors.status}
            >
              <option value={"Ongoing"}>Ongoing</option>
              <option value={"Hiatus"}>Hiatus</option>
              <option value={"Completed"}>Completed</option>
            </Select>
          </FormControl>
        </Grid>
        <Grid item md={12} xs={12}>
          <TextField
            fullWidth
            margin="normal"
            type="text"
            multiline
            rows={6}
            variant="filled"
            label="About"
            name="about"
            value={formik.values.about}
            onChange={formik.handleChange}
            helperText={formik.touched.about && formik.errors.about}
          />
        </Grid>
        <Grid item md={2} sm={3} xs={6}>
          <Button variant="filled" size="large" type="submit">
            Save
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}
