export class ContactInfo {
	
	firstName: string;
	lastName: string;
	email: string;
	phone: string;
}

export class JobInfo {
	title: string;
	description: string;
	qualifications: string;
	salary: number; 
	jobType: string; 
	apply: string;
	location: string;

}

export class JobType {
	fullTime = "Full Time";
	partTime = "Part Time";
	contract = "Contract";
	internship = "Internship"
}

export class JobListing {
	contact: ContactInfo;
	information: JobInfo;
}