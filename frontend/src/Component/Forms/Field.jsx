// import { Form, Input, Button, DatePicker, Select, Checkbox } from "antd";
// import Notifications from "../Notifications/Notifications";
// import { LoadingOutlined } from "@ant-design/icons";
// import { Fragment, useEffect, useState } from "react";
// import ServerService from "../../API/ServerService";
// import { Spin } from "antd";

// const Field = (props) => {
//   const [institute, setInstitute] = useState("");
//   const [university, setUniversity] = useState("");
//   const [loading, setLoading] = useState("");
//   const [file, setFile] = useState("");
//   const [filename, setFilename] = useState("Choose File");
//   const [uploadedFile, setUploadedFile] = useState({});

//   const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

//   const onChange = (e) => {
//     setFile(e.target.files[0]);
//     setFilename(e.target.files[0].name);
//   };

//   useEffect(() => {
//     ServerService.GetInstitutionList()
//       .then((res) => {
//         setInstitute(res.data);
//       })
//       .catch((err) => {
//         console.log(err);
//       });

//     ServerService.GetUniversityList()
//       .then((res) => {
//         setUniversity(res.data);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }, []);

//   const onFinish = (values) => {
//     const formData = new FormData();

//     if (props.selected === "Workshop") {

//       console.log(values.eventEndDate.format("YYYY-MM-DD"));
//       formData.append("data_file", file);
//       formData.append("institute", values.Institute);
//       formData.append("name", values.Workshop);
//       formData.append("start_date", values.eventStartDate.format("YYYY-MM-DD"));
//       formData.append("end_date", values.eventEndDate.format("YYYY-MM-DD"));
//       formData.append("venue_fdp", values.venue);

//       setLoading(true);
//       ServerService.UploadWorkshopData(formData)
//         .then((res) => {
//           setLoading(false);
//           console.log(res.data);
//           // props.onOk();
//           Notifications(
//             "success",
//             "Success!",
//             "The file has been uploaded successfully."
//           );
//         })
//         .catch((err) => {
//           console.log(err);
//           setLoading(false);
//           Notifications(
//             "error",
//             "Error!",
//             "The has been some error uploading the file."
//           );
//         });
//     }

//     else if (props.selected === "University") {
//       formData.append("name", values.UniversityName);
//       formData.append("city", values.City)
//       formData.append("state", values.State)

//       setLoading(true);
//       ServerService.AddUniversity(formData)
//         .then((res) => {
//           setLoading(false);
//           console.log(res.data);

//           // props.onOk();
//           Notifications(
//             "success",
//             "Success!",
//             "University has been successfully added"
//           );
//         })
//         .catch((err) => {
//           console.log(err);
//           setLoading(false);
//           Notifications(
//             "error",
//             "Error!",
//             "The has been some error adding university."
//           );
//         });
//     }

//     // college
//     else {
//       let university_name;
//       university.map((item, index) => {
//         if (item.id === values.University)
//           university_name = item.name;
//       })
//       formData.append("name", values.CollegeName);
//       formData.append("affiliated", values.Affiliated);
//       formData.append("code", values.CollegeCode);
//       formData.append("city", values.CollegeCity);
//       formData.append("state", values.CollegeState);
//       formData.append("university", values.University);
//       formData.append("university_name", university_name);

//       // console.log(values, university_name);
//       setLoading(true);
//       ServerService.AddCollege(formData)
//         .then((res) => {
//           setLoading(false);
//           console.log(res.data);
//           // props.onOk();
//           Notifications(
//             "success",
//             "Success!",
//             "College has been successfully added"
//           );
//         })
//         .catch((err) => {
//           console.log(err);
//           setLoading(false);
//           Notifications(
//             "error",
//             "Error!",
//             "The has been some error adding college."
//           );
//         });

//     }

//   };

//   const onFinishFailed = (errorInfo) => {
//     console.log("Failed:", errorInfo);
//   };

//   const workshopForm = (
//     <Fragment>
//       <Form.Item
//         name="Workshop"
//         rules={[
//           {
//             required: true,
//             message: "Please input Workshop Name!",
//           },
//         ]}
//       >
//         <Input placeholder="Workshop Name" />
//       </Form.Item>

//       <Form.Item
//         name="eventStartDate"
//         rules={[
//           {
//             required: true,
//             message: "Please select a date!",
//           },
//         ]}
//       >
//         <DatePicker placeholder="Event start date" />
//       </Form.Item>

//       <Form.Item
//         name="eventEndDate"
//         rules={[
//           {
//             required: true,
//             message: "Please select a date!",
//           },
//         ]}
//       >
//         <DatePicker placeholder="Event End date" />
//       </Form.Item>

//       <Form.Item
//         name="venue"
//         rules={[
//           {
//             required: true,
//             message: "Please enter the venue!",
//           },
//         ]}
//       >
//         <Input placeholder="FDP venue" />
//       </Form.Item>

//       <Form.Item
//         name="Institute"
//         rules={[
//           {
//             required: true,
//             message: "Please input Workshop venue!",
//           },
//         ]}
//       >
//         <Select placeholder="Select Institute">
//           {institute
//             ? institute.map((item, index) => {
//               return (
//                 <Select.Option key={index} value={item.id}>
//                   {item.name}
//                 </Select.Option>
//               );
//             })
//             : null}
//         </Select>
//       </Form.Item>

//       <Form.Item>
//         <div className="custom-file mb-4">
//           <input
//             type="file"
//             className="custom-file-input"
//             id="customFile"
//             onChange={onChange}
//           />
//         </div>

//         {/* <UploadBtn onOk={props.onOk} /> */}
//       </Form.Item>
//     </Fragment>
//   );

//   const collegeForm = (
//     <Fragment>
//       <Form.Item
//         name="CollegeName"
//         rules={[
//           {
//             required: true,
//             message: "Please Enter College name",
//           },
//         ]}
//       >
//         <Input placeholder="College Name" />
//       </Form.Item>

//       <Form.Item
//         name="Affiliated"
//         valuePropName="checked"
//         initialValue={false}
//       >
//         <Checkbox>Affiliated to AICTE</Checkbox>
//       </Form.Item>

//       <Form.Item
//         name="CollegeCode"
//         rules={[
//           {
//             required: true,
//             message: "Please Enter Code",
//           },
//         ]}
//       >
//         <Input placeholder="College Code" />
//       </Form.Item>

//       <Form.Item
//         name="CollegeCity"
//         rules={[
//           {
//             required: true,
//             message: "Please Enter City name",
//           },
//         ]}
//       >
//         <Input placeholder="City" />
//       </Form.Item>

//       <Form.Item
//         name="CollegeState"
//         rules={[
//           {
//             required: true,
//             message: "Please Enter State",
//           },
//         ]}
//       >
//         <Input placeholder="State" />
//       </Form.Item>

//       <Form.Item
//         name="University"
//         rules={[
//           {
//             required: true,
//             message: "Please Select University!",
//           },
//         ]}
//       >
//         <Select placeholder="Select University">
//           {university
//             ? university.map((item, index) => {
//               return (
//                 <Select.Option key={index} value={item.id} >
//                   {item.name}
//                 </Select.Option>
//               );
//             })
//             : null}
//         </Select>
//       </Form.Item>
//     </Fragment>
//   );

//   const universityForm = (
//     <Fragment>
//       <Form.Item
//         name="UniversityName"
//         rules={[
//           {
//             required: true,
//             message: "Please Enter university name",
//           },
//         ]}
//       >
//         <Input placeholder="University Name" />
//       </Form.Item>

//       <Form.Item
//         name="City"
//         rules={[
//           {
//             required: true,
//             message: "Please Enter City name",
//           },
//         ]}
//       >
//         <Input placeholder="City" />
//       </Form.Item>

//       <Form.Item
//         name="State"
//         rules={[
//           {
//             required: true,
//             message: "Please Enter State",
//           },
//         ]}
//       >
//         <Input placeholder="State" />
//       </Form.Item>
//     </Fragment>
//   );

//   return (
//     <Form
//       name="basic"
//       initialValues={{
//         remember: true,
//       }}
//       onFinish={onFinish}
//       onFinishFailed={onFinishFailed}
//       autoComplete="off"
//     >
//       {props.selected === "University"
//         ? universityForm
//         : [props.selected === "Workshop" ? workshopForm : collegeForm]}

//       <Form.Item>
//         <Button
//           type="primary"
//           htmlType="submit"
//           className="orange-btn"
//           disabled={loading ? true : false}
//           // onClick={onSubmit}
//           block
//         >
//           {loading ? <Spin indicator={antIcon} /> : [props.selected === "Workshop" ? "ADD WORKSHOP"
//             : [props.selected === "University" ? "ADD UNIVERSITY" : "ADD COLLEGE"]]}
//         </Button>
//       </Form.Item>
//       {uploadedFile ? <div className="row"></div> : null}
//     </Form>
//   );
// };

// export default Field;