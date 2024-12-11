"use client";
import GlobalTable from "@/components/main/globalfile";

const ExamplePage = () => {
  const headers = ["ID", "Name", "Department", "Phone", "Address", "Actions"];
  const dialogFields = [
    "ID",
    "Name",
    "Department",
    "Phone",
    "Address",
    "Email",
    "Date of Joining",
    "Role",
    "Salary",
    "Supervisor",
    "Location",
    "Status",
  ];
  
  // Example data with unique IDs for each row
  const data = [
    { ID: "1", Name: "Alice", Department: "HR", Phone: "1234567890", Address: "New York", Actions: "Edit" },
    { ID: "2", Name: "Bob", Department: "Engineering", Phone: "9876543210", Address: "San Francisco", Actions: "Edit" },
  ];

  // Handle row click event to pass the ID for redirection
  const handleRowClick = (id: string) => {
    window.location.href = `/teamlead/${id}`; // Redirect to the dynamic page based on the row ID
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <GlobalTable
        tableHeading="Teamlead"
        headers={headers}
        data={data}
        dialogFields={dialogFields}
        onRowClick={handleRowClick} // Pass row click handler to GlobalTable
      />
    </div>
  );
};

export default ExamplePage;
