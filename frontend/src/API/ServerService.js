import axios from "./BaseUrl/BaseUrl";

class ServerService {
  GetHeaders() {
    return {
      headers: {
        Authorization: `Bearer ${window.localStorage.getItem("access")}`,
      },
    };
  }

  // Auth-related
  Login(data) {
    return axios.post(`/auth/login/`, data);
  }

  // Dashboard-related
  GetDashboardData() {
    return axios.get(`/dashboard/`, this.GetHeaders());
  }

  // University-related
  GetUniversitiesList() {
    return axios.get(`/university/`, this.GetHeaders());
  }

  //College-related
  GetAllColleges() {
    return axios.get(`/institute/`, this.GetHeaders());
  }
  GetCollegesList(univId) {
    return axios.get(
      `/institute/?state=&city=&university=${univId}`,
      this.GetHeaders()
    );
  }

  //Faculty-related
  GetFacultyList(collegeId) {
    return axios.get(`/faculties/?institute=${collegeId}`, this.GetHeaders());
  }
  GetFacultyData(facultyId) {
    return axios.get(`/view/faculty/${facultyId}/`, this.GetHeaders());
  }

  //Workshop-related
  GetWorkshopsList() {
    return axios.get(`/workshops/`, this.GetHeaders());
  }
  GetWorkshopRelatedFaculties(workshopId) {
    return axios.get(
      `/workshop-response/?workshop=${workshopId}`,
      this.GetHeaders()
    );
  }
  UploadWorkshopData(formData) {
    return axios.post("/upload/", formData, this.GetHeaders());
  }
  AddUniversity(formData) {
    return axios.post("/university/", formData, this.GetHeaders());
  }
  AddCollege(formData) {
    return axios.post("/institute/", formData, this.GetHeaders());
  }

  // UploadExcelFile(formData) {
  //   return axios.post("/upload/5/", formData, this.GetHeaders());
  // }
  // WorkshopProfile() {
  //   return axios.get(`/list/questions/5/`, this.GetHeaders());
  // }

  //Faculty-workshop related
  GetWorkshopAttendeeData(id) {
    return axios.get(`/view/attendee/${id}/response/`, this.GetHeaders());
  }
  SendEmailSingleWorkshop(id) {
    return axios.post(`/send/bulk/?id=${id}`, this.GetHeaders());
  }
  SendBulkEmail(workshopId) {
    return axios.post(`/send/bulk/?workshop=${workshopId}`, this.GetHeaders());
  }

  // Institution details
  GetInstitutionList() {
    return axios.get("/institute/", this.GetHeaders());
  }

  // University details
  GetUniversityList() {
    return axios.get("/university/", this.GetHeaders());
  }
}

export default new ServerService();