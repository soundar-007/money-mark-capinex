import api from "./api";

export const apiFunctions = {
  // Login
  login: async (credentials) => {
    const response = await api.post("auth/login", credentials);
    return response.data;
  },

  // Get user profile
  getProfile: async () => {
    const response = await api.get("/auth/me");
    return response.data;
  },

  // Refresh token
  refreshToken: async () => {
    const refreshToken = localStorage.getItem("refreshToken");
    if (!refreshToken) throw new Error("No refresh token");
    const response = await api.post("/auth/token/refresh", {
      refresh: refreshToken,
    });
    return response;
  },

  // users
  getUsers: async (params = {}) => {
    const response = await api.get("/users", { params });
    return response.data.data;
  },
  getAccessType: async () => {
    const response = await api.get("/user_access_types");
    return response.data.data;
  },
  createUser: async (params) => {
    const response = await api.post("/users", { params });
    return response.data.data;
  },
  updateUser: async (params) => {
    const response = await api.put(`/users/${params.id}`, params);
    return response.data.data;
  },
  getUserDetails: async (params) => {
    console.log(params);
    const response = await api.get(`users/${params}`);
    return response.data.data;
  },
  deleteUser: async (params) => {
    const response = await api.delete(`users/${params.id}`);
    return response.data.data;
  },
  updateUserPermission: async (params) => {
    const response = await api.put(`users/${params.id}/permissions`);
    return response.data.data;
  },
  updateUserStatus: async (params) => {
    const response = await api.put(`users/${params.id}/status`);
    return response.data.data;
  },

  // connectors
  createConnector: async (params) => {
    console.log(params);
    const response = await api.post("/connectors", {
      mobile_number: params.mobile_number,
      name: params.name,
    });
    return response.data;
  },

  getAllConnector: async () => {
    const response = await api.get("/connectors");
    return response.data?.data;
  },

  getSingleConnector: async (params) => {
    const response = await api.get(`/connectors/${params}`);
    return response.data;
  },

  //banks
  getBanks: async () => {
    const response = await api.get("/banks");
    return response.data?.data;
  },
  updateBank: async (params) => {
    const response = await api.put(`/bank_contacts/${params}`);
    return response.data?.data;
  },
  updateBankStatus: async (params) => {
    const response = await api.put(`/banks/${params.id}/status`, {
      is_active: params.is_active,
    });
    return response.data?.data;
  },

  // bank contact
  getBankContacts: async () => {
    const response = await api.get("/bank_contacts");
    return response.data?.data;
  },
  createBankContacts: async (params) => {
    const response = await api.post("/bank_contacts", params);
    return response.data?.data;
  },
  deleteBankContact: async (params) => {
    const response = await api.delete(`/bank_contacts/${params}`);
    return response.data?.data;
  },
  updateBankContact: async (params) => {
    const response = await api.put(`/bank_contacts/${params}`);
    return response.data?.data;
  },

  // users
  getAllUsers: async () => {
    const response = await api.get("/users");
    return response.data?.data;
  },
  createUser: async (params) => {
    const response = await api.post("/users", params);
    return response.data?.data;
  },
  updateUser: async (params) => {
    const response = await api.put(`/users/${params.id}`, params);
    return response.data?.data;
  },
  deleteUser: async (params) => {
    const response = await api.delete(`/users/${params}`);
    return response.data?.data;
  },
  getUser: async (params) => {
    const response = await api.get(`/users/${params}`);
    return response.data?.data;
  },
  disableUser: async (userId) => {
    const response = await api.put(`/users/${userId}`);
    return response.data?.data;
  },
  makeActive: async (param) => {
    const response = await api.put(`/users/${param.id}/status`, param);
    return response.data?.data;
  },
  resetPassword: async (userId) => {
    const response = await api.get(`/users/${userId}/access_code`);
    return response.data?.data;
  },
  // organizations
  getOrganizations: async () => {
    const response = await api.get("/organizations");
    return response.data.data;
  },

  // dialers
  getDialerUsers: async () => {
    const response = await api.get("/dialers/users");
    return response.data.data;
  },
  updateQueueDialerUser: async (param) => {
    const response = await api.put(`dialers/users`, param);
    return response.data.data;
  },
  getUsersByDialer: async (param) => {
    const response = await api.get(`dialers/users/?dialer_id=${param}`);
    return response.data.data;
  },
  getDialers: async () => {
    const response = await api.get("/dialers");
    return response.data.data;
  },
  // dialer queue
  getDialerQueue: async () => {
    const response = await api.get(`dialers/queues`);
    return response.data.data;
  },
  addDialerQueue: async (param) => {
    const response = await api.post("dialers/queues", param);
    return response.data.data;
  },
  updateDialerQueue: async (param) => {
    const response = await api.put(`dialers/queues/${param.id}`, param);
    return response.data.data;
  },
  deleteDialerQueue: async (param) => {
    const response = await api.delete(`dialers/queues/${param}`);
    return response.data.data;
  },
  // dialer gateway
  getDialerGateway: async () => {
    const response = await api.get(`dialers/gateways`);
    return response.data.data;
  },
  addDialerGateway: async (param) => {
    const response = await api.post("dialers/gateways", param);
    return response.data.data;
  },
  updateDialerGateway: async (param) => {
    const response = await api.put(`dialers/gateways/${param}`);
    return response.data.data;
  },
  deleteDialerGateway: async (param) => {
    const response = await api.delete(`dialers/gateways/${param}`);
    return response.data.data;
  },
  defaultDialerGateway: async (param) => {
    const response = await api.put(`dialers/gateways/${param}/set_default`, {
      is_active: true,
    });
    return response.data.data;
  },
  assignQueue: async (param) => {
    const response = await api.put(`dialers/users`, param);
    return response.data.data;
  },

  // Get leads
  getLeads: async (leadId) => {
    const response = await api.get(`/leads`);
    return response.data.data;
  },
  getLeadsDetails: async (leadId) => {
    const response = await api.get(`/leads/${leadId}`);
    return response.data.data;
  },

  // Create lead
  createLead: async (leadData) => {
    const response = await api.post("/leads", leadData);
    return response.data;
  },

  createLeadCustomer: async (params) => {
    const response = await api.post("/leads/customers", params);
    return response.data.data;
  },

  // Update lead
  updateLead: async (id, leadData) => {
    const response = await api.put(`/leads/${id}`, leadData);
    return response.data.data;
  },

  // Delete lead
  deleteLead: async (id) => {
    const response = await api.delete(`/leads/${id}`);
    return response.data.data;
  },

  commercials: async (param, leadId) => {
    const response = await api.patch(`/leads/${leadId}/commercials`, param);
    return response.data.data;
  },

  submitToBank: async (param) => {
    const response = await api.post(`/leads/${param}/submit-to-bank`);
    return response.data.data;
  },
  selectLoan: async (param,leadId) => {
    const response = await api.post(`/leads/${leadId}/bank-organization/select`,param);
    return response.data.data;
  },
  withdraw:async(leadId)=>{
      const response = await api.post(
        `/leads/${leadId}/bank-organization/withdraw`
      );
      return response.data.data;
  },

  // Get campaigns
  getCampaigns: async (params = {}) => {
    const response = await api.get("/campaigns", { params });
    return response.data;
  },

  // Create campaign
  createCampaign: async (campaignData) => {
    const response = await api.post("/campaigns", campaignData);
    return response.data;
  },

  //backlogs
  getBacklogs: async () => {
    const response = await api.get("/backlogs");
    return response.data.data;
  },
  createBacklogs: async (param) => {
    const response = await api.post("/backlogs", param);
    return response.data.data;
  },

  // backendProcessing
  getBackendProcessing: async () => {
    const response = await api.get("/backend-processing");
    return response.data.data;
  },
  getSingleBackendProcessing: async (id) => {
    const response = await api.get(`/backend-processing/${id}`);
    return response.data.data;
  },
  rejectLoan: async (id,param) => {
    const response = await api.post(`/backend-processing/${id}/reject`,param);
    return response.data.data;
  },
  updateFinalLoan: async (id) => {
    const response = await api.patch(`/backend-processing/${id}/final-loan`,param);
    return response.data.data;
  },
  documentUpload: async (param,leadId) => {
    const response = await api.post(`/leads/${leadId}/documents`, param);
    return response.data.data;
  },
  backendProcessingStatus: async (param) => {
    const response = await api.patch(
      `/backend-processing/${param.id}/backend-status`,
      param
    );
    return response.data.data;
  },
  rejectLoan: async (param) => {
    const response = await api.patch(
      `/backend-processing/${param.id}/reject`,
      param
    );
    return response.data.data;
  },
  finalLoan: async (param) => {
    const response = await api.patch(
      `/backend-processing/${param.id}/final-loan`,
      param
    );
    return response.data.data;
  },

  // global apis
  getProducts: async () => {
    const response = await api.get("/filter-choices?filter=product_types");
    return response.data.data?.choices;
  },
  getLocations: async () => {
    const response = await api.get("/districts?type=prime");
    return response.data.data;
  },
  getTier: async () => {
    const response = await api.get("/filter-choices?filter=tiers");
    return response.data.data?.choices;
  },
  getLeadStatuses: async () => {
    const response = await api.post("/filter-choices?filter=lead_statuses");
    return response.data.data;
  },
  getBackendStatuses: async () => {
    const response = await api.post("/filter-choices?filter=backend_statuses");
    return response.data.data;
  },
  getGenders: async () => {
    const response = await api.get("/filter-choices?filter=genders");
    return response.data.data?.choices;
  },
  getMaritalStatuses: async () => {
    const response = await api.get("/filter-choices?filter=marital_statuses");
    return response.data.data?.choices;
  },
  getResidenceTypes: async () => {
    const response = await api.get("/filter-choices?filter=residence_types");
    return response.data.data?.choices;
  },
  getEmploymentTypes: async () => {
    const response = await api.get("/filter-choices?filter=employment_types");
    return response.data.data?.choices;
  },
  getAddressProofTypes: async () => {
    const response = await api.get(
      "/filter-choices?filter=address_proof_types"
    );
    return response.data.data?.choices;
  },
  getPropertyCategories: async () => {
    const response = await api.get(
      "/filter-choices?filter=property_categories"
    );
    return response.data.data?.choices;
  },
  getDocumentTypes: async () => {
    const response = await api.get("/filter-choices?filter=document_types");
    return response.data.data?.choices;
  },
  getCampaignTypes: async () => {
    const response = await api.get("/filter-choices?filter=campaign_types");
    return response.data.data?.choices;
  },
  getCampaignStatuses: async () => {
    const response = await api.get("/filter-choices?filter=campaign_statuses");
    return response.data.data?.choices;
  },
  getCallDispositions: async () => {
    const response = await api.get("/filter-choices?filter=call_dispositions");
    return response.data.data?.choices;
  },
  getCallStatuses: async () => {
    const response = await api.get("/filter-choices?filter=call_statuses");
    return response.data.data?.choices;
  },
  getProcessingStatuses: async () => {
    const response = await api.get(
      "/filter-choices?filter=processing_statuses"
    );
    return response.data.data?.choices;
  },
  getRejectReasons: async () => {
    const response = await api.get("/filter-choices?filter=reject_reasons");
    return response.data.data?.choices;
  },
  getDesignations: async () => {
    const response = await api.get("/filter-choices?filter=designations");
    return response.data.data?.choices;
  },
};
