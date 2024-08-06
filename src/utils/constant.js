export const address = '0xD3DA8cd8222437Cc4AFc6d4e02B211BdCA6Bf185';
 
export const abi = [
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "new_owner",
				"type": "address"
			}
		],
		"name": "add_owner",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "patientAddress",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "_description",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "_date",
				"type": "uint256"
			}
		],
		"name": "addAppointment",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "departmentName",
				"type": "string"
			}
		],
		"name": "addDepartment",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "doctorAddress",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "_licensenumber",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_first_name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_last_name",
				"type": "string"
			},
			{
				"internalType": "uint8",
				"name": "_speciality",
				"type": "uint8"
			},
			{
				"internalType": "uint8",
				"name": "_years_of_experience",
				"type": "uint8"
			}
		],
		"name": "addDoctor",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_name",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "_quantity",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "_expiryDate",
				"type": "string"
			}
		],
		"name": "addMedicine",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "nurseAddress",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "_first_name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_last_name",
				"type": "string"
			},
			{
				"internalType": "uint8",
				"name": "_department",
				"type": "uint8"
			},
			{
				"internalType": "string",
				"name": "_licensenumber",
				"type": "string"
			},
			{
				"internalType": "uint8",
				"name": "_years_of_experience",
				"type": "uint8"
			},
			{
				"internalType": "address",
				"name": "_supervisor",
				"type": "address"
			}
		],
		"name": "addNurse",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "patientAddress",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "_name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_dateOfBirth",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_gender",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_homeAddress",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_phoneNumber",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_email",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_pastConditions",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_surgeries",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_allergies",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_medications",
				"type": "string"
			}
		],
		"name": "addPatient",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "pharmacistAddress",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "_first_name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_last_name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_licensenumber",
				"type": "string"
			},
			{
				"internalType": "uint8",
				"name": "_years_of_experience",
				"type": "uint8"
			}
		],
		"name": "addPharmacist",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "patientAddress",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "_medicine",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "_quantity",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "_instructions",
				"type": "string"
			}
		],
		"name": "addPrescription",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "specializationName",
				"type": "string"
			}
		],
		"name": "addSpecialization",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "patientAddress",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_appointmentId",
				"type": "uint256"
			}
		],
		"name": "cancelAppointment",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "new_owner_address",
				"type": "address"
			}
		],
		"name": "change_owner",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "patientAddress",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "prescriptionId",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "newMedicine",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "newQuantity",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "newInstructions",
				"type": "string"
			}
		],
		"name": "PrescriptionUpdated",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "patientAddress",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_appointmentId",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "_description",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "_date",
				"type": "uint256"
			}
		],
		"name": "updateAppointment",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "doctorAddress",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "_licensenumber",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_first_name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_last_name",
				"type": "string"
			},
			{
				"internalType": "uint8",
				"name": "_speciality",
				"type": "uint8"
			},
			{
				"internalType": "uint8",
				"name": "_years_of_experience",
				"type": "uint8"
			}
		],
		"name": "updateDoctor",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_medicineId",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_newQuantity",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "_newExpiryDate",
				"type": "string"
			}
		],
		"name": "updateMedicine",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "nurseAddress",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "_first_name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_last_name",
				"type": "string"
			},
			{
				"internalType": "uint8",
				"name": "_department",
				"type": "uint8"
			},
			{
				"internalType": "string",
				"name": "_licensenumber",
				"type": "string"
			},
			{
				"internalType": "uint8",
				"name": "_years_of_experience",
				"type": "uint8"
			},
			{
				"internalType": "address",
				"name": "_supervisor",
				"type": "address"
			}
		],
		"name": "updateNurse",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "patientAddress",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "_name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_dateOfBirth",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_gender",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_homeAddress",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_phoneNumber",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_email",
				"type": "string"
			},
			{
				"components": [
					{
						"internalType": "string",
						"name": "pastConditions",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "surgeries",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "allergies",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "medications",
						"type": "string"
					}
				],
				"internalType": "struct HealthcareSystem.MedicalRecord",
				"name": "_medicalRecord",
				"type": "tuple"
			}
		],
		"name": "updatePatient",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "pharmacistAddress",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "_first_name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_last_name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_licensenumber",
				"type": "string"
			},
			{
				"internalType": "uint8",
				"name": "_years_of_experience",
				"type": "uint8"
			}
		],
		"name": "updatePharmacist",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "patientAddress",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_prescriptionId",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "_newMedicine",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "_newQuantity",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "_newInstructions",
				"type": "string"
			}
		],
		"name": "updatePrescription",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "departmentIDs",
		"outputs": [
			{
				"internalType": "uint8",
				"name": "",
				"type": "uint8"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint8",
				"name": "",
				"type": "uint8"
			}
		],
		"name": "departmentMapping",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "departments",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "doctorAddresses",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "doctors",
		"outputs": [
			{
				"internalType": "string",
				"name": "licensenumber",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "first_name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "last_name",
				"type": "string"
			},
			{
				"internalType": "uint8",
				"name": "specialization",
				"type": "uint8"
			},
			{
				"internalType": "uint8",
				"name": "years_of_experience",
				"type": "uint8"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getAllDepartments",
		"outputs": [
			{
				"internalType": "string[]",
				"name": "",
				"type": "string[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getAllDoctors",
		"outputs": [
			{
				"components": [
					{
						"internalType": "string",
						"name": "licensenumber",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "first_name",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "last_name",
						"type": "string"
					},
					{
						"internalType": "uint8",
						"name": "specialization",
						"type": "uint8"
					},
					{
						"internalType": "uint8",
						"name": "years_of_experience",
						"type": "uint8"
					}
				],
				"internalType": "struct HealthcareSystem.Doctor[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getAllNurses",
		"outputs": [
			{
				"components": [
					{
						"internalType": "string",
						"name": "first_name",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "last_name",
						"type": "string"
					},
					{
						"internalType": "uint8",
						"name": "department",
						"type": "uint8"
					},
					{
						"internalType": "string",
						"name": "licensenumber",
						"type": "string"
					},
					{
						"internalType": "uint8",
						"name": "years_of_experience",
						"type": "uint8"
					},
					{
						"internalType": "address",
						"name": "supervisor",
						"type": "address"
					}
				],
				"internalType": "struct HealthcareSystem.Nurse[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getAllPharmacists",
		"outputs": [
			{
				"components": [
					{
						"internalType": "string",
						"name": "first_name",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "last_name",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "licensenumber",
						"type": "string"
					},
					{
						"internalType": "uint8",
						"name": "years_of_experience",
						"type": "uint8"
					}
				],
				"internalType": "struct HealthcareSystem.Pharmacist[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getAllSpecializations",
		"outputs": [
			{
				"internalType": "string[]",
				"name": "",
				"type": "string[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "is_owner_check",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "medicineCount",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "medicines",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "quantity",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "expiryDate",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "nextAppointmentId",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "nurseAddresses",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "nurses",
		"outputs": [
			{
				"internalType": "string",
				"name": "first_name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "last_name",
				"type": "string"
			},
			{
				"internalType": "uint8",
				"name": "department",
				"type": "uint8"
			},
			{
				"internalType": "string",
				"name": "licensenumber",
				"type": "string"
			},
			{
				"internalType": "uint8",
				"name": "years_of_experience",
				"type": "uint8"
			},
			{
				"internalType": "address",
				"name": "supervisor",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "patientAddresses",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "patientAppointments",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "description",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "date",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "creator",
				"type": "address"
			},
			{
				"internalType": "enum HealthcareSystem.Status",
				"name": "status",
				"type": "uint8"
			},
			{
				"internalType": "bool",
				"name": "exists",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "patientCount",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "patientPrescriptions",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "patientAddress",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "medicine",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "quantity",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "instructions",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "date",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "patients",
		"outputs": [
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "dateOfBirth",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "gender",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "homeAddress",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "phoneNumber",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "email",
				"type": "string"
			},
			{
				"components": [
					{
						"internalType": "string",
						"name": "pastConditions",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "surgeries",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "allergies",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "medications",
						"type": "string"
					}
				],
				"internalType": "struct HealthcareSystem.MedicalRecord",
				"name": "medicalRecord",
				"type": "tuple"
			},
			{
				"internalType": "uint256",
				"name": "reportCount",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "appointmentCount",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "prescriptionCount",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "pharmacistAddresses",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "pharmacists",
		"outputs": [
			{
				"internalType": "string",
				"name": "first_name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "last_name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "licensenumber",
				"type": "string"
			},
			{
				"internalType": "uint8",
				"name": "years_of_experience",
				"type": "uint8"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "prescriptionCount",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "prescriptions",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "patientAddress",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "medicine",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "quantity",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "instructions",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "date",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "specialization",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "specializationIDs",
		"outputs": [
			{
				"internalType": "uint8",
				"name": "",
				"type": "uint8"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint8",
				"name": "",
				"type": "uint8"
			}
		],
		"name": "specializationMapping",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]