import React, { useState } from "react";
import Layout from "./Layout";
import Input from "./Input";
import Select from "./Select";
import {
  categories,
  classes,
  default_settings,
  departments,
  designations,
  employment_types,
  ethnicities,
  genders,
  holyday_calenders,
  icard_nos,
  leave_assignments,
  locations,
  marital_statuses,
  master_ones,
  master_twos,
  mother_tongues,
  nationalities,
  positions,
  religions,
  sub_departments,
  titles,
  tribes,
  units,
  user_roles,
  week_off_types,
} from "../utils/data";
import PageHeading from "./PageHeading";
import BoxSection from "./BoxSection";
import BoxTitle from "./BoxTitle";
import BoxSubTitle from "./BoxSubTitle";
import Button from "./Button";
import ImageUpload from "./ImageUpload";
import Sidebar from "./Sidebar";

const Home = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [formData, setFormData] = useState({
    code: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageUpload = (file) => {
    console.log("Selected file:", file);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <Layout toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen}>
      <div className={`content-wrapper ${isSidebarOpen ? "shifted" : ""}`}>
        <div className="container-fluid">
          <PageHeading title={"Information"} />
          <form action id="myForm" method="POST">
            <BoxSection>
              <div className="form-section">
                <div className="left">
                  <div className="upload-images">
                    <div className="user-upload-img">
                      <ImageUpload
                        onImageUpload={handleImageUpload}
                        name={"imageUpload"}
                        defaultImage={"/user-upload.png"}
                      />
                    </div>
                    <div className="user-upload-img">
                      <ImageUpload
                        onImageUpload={handleImageUpload}
                        name={"signUpload"}
                        defaultImage={"/add-sign.png"}
                      />
                    </div>
                  </div>
                </div>
                <div className="right">
                  <div className="inline-option">
                    <div className="mb-3 mt-3">
                      <Input
                        label="Code"
                        type="text"
                        name="code"
                        value={formData.code}
                        onChange={handleChange}
                        placeholder="Auto
                        Generated Code"
                        required={true}
                        readOnly={true}
                      />
                    </div>
                    <div className="mb-3 mt-3">
                      <Input
                        label="Payroll No"
                        type="text"
                        name="payroll_no"
                        value={formData.payroll_no}
                        onChange={handleChange}
                        placeholder="Enter Payroll No"
                        required={true}
                        readOnly={false}
                      />
                    </div>
                    <div className="inline-option-2">
                      <div className="mb-3 mt-3">
                        <Select
                          label="Employment Type"
                          name="employment_type"
                          value={formData.employment_type}
                          onChange={handleChange}
                          options={employment_types}
                          required={true}
                        />
                      </div>
                      <div className="mb-3 mt-3">
                        <Select
                          label="Title"
                          name="title"
                          value={formData.title}
                          onChange={handleChange}
                          options={titles}
                          required={false}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="inline-option">
                    <div className="mb-3 mt-3">
                      <Input
                        label="First name"
                        type="text"
                        name="first_name"
                        value={formData.first_name}
                        onChange={handleChange}
                        placeholder="Enter first name"
                        required={true}
                      />
                    </div>
                    <div className="mb-3 mt-3">
                      <Input
                        label="Middle Name"
                        type="text"
                        name="middle_name"
                        value={formData.middle_name}
                        onChange={handleChange}
                        placeholder="Enter middle name"
                        required={false}
                      />
                    </div>
                    <div className="mb-3 mt-3">
                      <Input
                        label="Last Name"
                        type="text"
                        name="last_name"
                        value={formData.last_name}
                        onChange={handleChange}
                        placeholder="Enter last name"
                        required={true}
                      />
                    </div>
                  </div>
                  <div className="inline-option">
                    <div className="mb-3 mt-3">
                      <Input
                        label="Joining Date"
                        type="date"
                        name="Joining_date"
                        value={formData.Joining_date}
                        onChange={handleChange}
                        placeholder="Enter Joining date"
                        required={true}
                      />
                    </div>
                    <div className="inline-option-2">
                      <div className="mb-3 mt-3">
                        <Input
                          label="Probation"
                          type="checkbox"
                          name="probation"
                          value={formData.probation}
                          onChange={handleChange}
                          required={false}
                        />
                      </div>
                      <div className="mb-3 mt-3">
                        <Input
                          label="Contract"
                          type="checkbox"
                          name="contract"
                          value={formData.contract}
                          onChange={handleChange}
                          required={false}
                        />
                      </div>
                    </div>
                    <div className="mb-3 mt-3">
                      <Select
                        label="ICard No"
                        name="icard_no"
                        value={formData.icard_no}
                        onChange={handleChange}
                        options={icard_nos}
                        required={false}
                      />
                    </div>
                  </div>
                  <div className="inline-option">
                    <div className="mb-3 mt-3">
                      <Select
                        label="Week off Type"
                        name="icard_no"
                        value={formData.week_off_type}
                        onChange={handleChange}
                        options={week_off_types}
                        required={true}
                      />
                    </div>
                    <div className="mb-3 mt-3">
                      <Select
                        label="Holyday Calender"
                        name="holyday_calender"
                        value={formData.holyday_calender}
                        onChange={handleChange}
                        options={holyday_calenders}
                        required={true}
                      />
                    </div>
                    <div className="mb-3 mt-3">
                      <Select
                        label="Leave Assignment Template"
                        name="leave_assignment"
                        value={formData.leave_assignment}
                        onChange={handleChange}
                        options={leave_assignments}
                        required={true}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </BoxSection>
            <BoxSection>
              <div className="">
                <BoxTitle title={"General information"} />
                <BoxSubTitle subTitle={"Placement information"} />
                <div className="inline-option">
                  <div className="mb-3 mt-3">
                    <Select
                      label="Location"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      options={locations}
                      required={true}
                    />
                  </div>
                  <div className="mb-3 mt-3">
                    <Select
                      label="Organization Unit"
                      name="unit"
                      value={formData.unit}
                      onChange={handleChange}
                      options={units}
                      required={true}
                    />
                  </div>
                  <div className="mb-3 mt-3">
                    <Select
                      label="Department"
                      name="department"
                      value={formData.department}
                      onChange={handleChange}
                      options={departments}
                      required={true}
                    />
                  </div>
                </div>
                <div className="inline-option">
                  <div className="mb-3 mt-3">
                    <Select
                      label="Sub Department"
                      name="sub_department"
                      value={formData.sub_department}
                      onChange={handleChange}
                      options={sub_departments}
                      required={false}
                    />
                  </div>
                  <div className="mb-3 mt-3">
                    <Select
                      label="Designation"
                      name="designation"
                      value={formData.designation}
                      onChange={handleChange}
                      options={designations}
                      required={true}
                    />
                  </div>
                  <div className="mb-3 mt-3">
                    <Select
                      label="Category"
                      name="category"
                      value={formData.category}
                      onChange={handleChange}
                      options={categories}
                      required={true}
                    />
                  </div>
                </div>
                <div className="inline-option">
                  <div className="mb-3 mt-3">
                    <Select
                      label="Class"
                      name="class"
                      value={formData.class}
                      onChange={handleChange}
                      options={classes}
                      required={false}
                    />
                  </div>
                  <div className="mb-3 mt-3">
                    <Select
                      label="Position"
                      name="position"
                      value={formData.position}
                      onChange={handleChange}
                      options={positions}
                      required={false}
                    />
                  </div>
                  <div className="mb-3 mt-3">
                    <Select
                      label="Master One"
                      name="master_one"
                      value={formData.master_one}
                      onChange={handleChange}
                      options={master_ones}
                      required={false}
                    />
                  </div>
                </div>
                <div className="inline-option">
                  <div className="mb-3 mt-3">
                    <Select
                      label="Master Two"
                      name="master_two"
                      value={formData.master_two}
                      onChange={handleChange}
                      options={master_twos}
                      required={false}
                    />
                  </div>
                  <div className="mb-3 mt-3">
                    <Select
                      label="User Role"
                      name="user_role"
                      value={formData.user_role}
                      onChange={handleChange}
                      options={user_roles}
                      required={true}
                    />
                  </div>
                </div>
              </div>
              <div className="">
                <BoxTitle title={"Personal information"} />
                <div className="inline-option">
                  <div className="mb-3 mt-3">
                    <Select
                      label="Gender"
                      name="gender"
                      value={formData.gender}
                      onChange={handleChange}
                      options={genders}
                      required={true}
                    />
                  </div>
                  <div className="mb-3 mt-3">
                    <Input
                      label="Birth Date"
                      type="date"
                      name="birth_date"
                      value={formData.birth_date}
                      onChange={handleChange}
                      placeholder="Enter Birth date"
                      required={false}
                    />
                  </div>
                  <div className="mb-3 mt-3">
                    <Select
                      label="Marital Status"
                      name="marital_status"
                      value={formData.marital_status}
                      onChange={handleChange}
                      options={marital_statuses}
                      required={true}
                    />
                  </div>
                </div>
                <div className="inline-option">
                  <div className="mb-3 mt-3">
                    <Input
                      label="Anniversary Date"
                      type="date"
                      name="anniversary_date"
                      value={formData.anniversary_date}
                      onChange={handleChange}
                      placeholder="Enter Anniversary date"
                      required={false}
                    />
                  </div>
                  <div className="mb-3 mt-3">
                    <Select
                      label="Religion"
                      name="religion"
                      value={formData.religion}
                      onChange={handleChange}
                      options={religions}
                      required={false}
                    />
                  </div>
                  <div className="mb-3 mt-3">
                    <Select
                      label="Mother Tongue"
                      name="mother_tongue"
                      value={formData.mother_tongue}
                      onChange={handleChange}
                      options={mother_tongues}
                      required={false}
                    />
                  </div>
                </div>
                <div className="inline-option">
                  <div className="mb-3 mt-3">
                    <Select
                      label="Nationality"
                      name="nationality"
                      value={formData.nationality}
                      onChange={handleChange}
                      options={nationalities}
                      required={false}
                    />
                  </div>
                  <div className="mb-3 mt-3">
                    <Select
                      label="Ethnicity"
                      name="ethnicity"
                      value={formData.ethnicity}
                      onChange={handleChange}
                      options={ethnicities}
                      required={false}
                    />
                  </div>
                  <div className="mb-3 mt-3">
                    <Select
                      label="Tribe"
                      name="tribe"
                      value={formData.tribe}
                      onChange={handleChange}
                      options={tribes}
                      required={false}
                    />
                  </div>
                </div>
                <div className="inline-option">
                  <div className="mb-3 mt-3">
                    <Input
                      label="Children"
                      type="number"
                      name="children"
                      value={formData.children}
                      onChange={handleChange}
                      placeholder="Enter children no"
                      required={false}
                    />
                  </div>
                  <div className="mb-3 mt-3">
                    <Input
                      label="Dependents"
                      type="number"
                      name="dependents"
                      value={formData.dependents}
                      onChange={handleChange}
                      placeholder="Enter dependents no"
                      required={false}
                    />
                  </div>
                </div>
              </div>
              <div className="">
                <BoxTitle title={"TA Default information"} />
                <div className="inline-option">
                  <div className="mb-3 mt-3">
                    <Select
                      label="Default Setting"
                      name="default_setting"
                      value={formData.default_setting}
                      onChange={handleChange}
                      options={default_settings}
                      required={true}
                    />
                  </div>
                </div>
              </div>
              <div className="">
                <BoxTitle title={"Contact Details"} />
                <div className="inline-option">
                  <div className="mb-3 mt-3">
                    <Input
                      label="Email Address"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter email address"
                      required={true}
                    />
                  </div>
                </div>
              </div>
            </BoxSection>
            <div className="form-footer">
              <Button
                text="Submit"
                type="submit"
                className="button-primary button"
              />
            </div>
          </form>
        </div>
      </div>
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
    </Layout>
  );
};

export default Home;
