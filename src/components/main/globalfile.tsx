import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from "@/components/ui/dialog";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"; 
import React from "react";
import { Acme, Archivo_Black, Caveat, Bowlby_One } from 'next/font/google';
import Sidebar from "./sidebar";

const acme = Acme({ subsets: ['latin'], weight: ['400'] });
const archivoBlack = Archivo_Black({ subsets: ['latin'], weight: ['400'] });
const caveat = Caveat({ subsets: ['latin'], weight: ['400', '700'] });
const bowlbyOne = Bowlby_One({ subsets: ['latin'], weight: ['400'] });

interface GlobalTableProps {
  headers: string[]; // Table headers
  data: Record<string, any>[]; // Table data
  dialogFields: string[]; // Input headings for the dialog box
  tableHeading: string;
  onRowClick: (id: string) => void; // Row click handler for redirection
}

const GlobalTable: React.FC<GlobalTableProps> = ({ headers, data, dialogFields, tableHeading, onRowClick }) => {
  return (
    <div>
      {/* Sidebar */}
      <Sidebar />
      <div className="flex min-h-screen">
        {/* Main Content */}
        <div className="sm:ml-64 flex-1 sm:p-6 p-1 space-y-6 w-full">
          <div className="flex justify-between">
            {/* Table Heading */}
            <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-100 mt-4">
              <span className={`${caveat.className}`}>{tableHeading}</span>
            </h2>
            {/* Dialog Box */}
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline" className="mt-4">
                  Open Dialog
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-3xl">
                <DialogHeader>
                  <DialogTitle>Dialog Box</DialogTitle>
                </DialogHeader>
                <div className="grid grid-cols-3 gap-4">
                  {dialogFields.map((field, index) => (
                    <div key={index} className="space-y-1">
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                        {field}
                      </label>
                      <input
                        type="text"
                        className="block w-full px-3 py-2 border rounded-lg shadow-sm focus:ring focus:ring-opacity-50 dark:bg-gray-800 dark:border-gray-600 dark:focus:ring-gray-700"
                        placeholder={`Enter ${field}`}
                      />
                    </div>
                  ))}
                </div>
                <DialogFooter>
                  <div className="flex justify-between">
                    <Button>Save</Button>
                    <Button variant={"destructive"} className="ml-6">Cancel</Button>
                  </div>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>

          {/* Table */}
          <div className="overflow-auto border rounded-lg shadow-sm">
            <Table>
              <TableHeader>
                <TableRow>
                  {headers.map((header, index) => (
                    <TableHead key={index} className="text-left text-sm font-medium text-gray-700 dark:text-gray-300">
                      {header}
                    </TableHead>
                  ))}
                </TableRow>
              </TableHeader>
              <TableBody>
                {data.map((row, rowIndex) => (
                  <TableRow
                    key={rowIndex}
                    className="odd:bg-white even:bg-gray-50 dark:odd:bg-gray-800 dark:even:bg-gray-900"
                    onClick={() => onRowClick(row.ID)} // Use the passed click handler
                  >
                    {headers.map((header, cellIndex) => (
                      <TableCell key={cellIndex} className="px-4 py-2 text-gray-900 dark:text-gray-100">
                        {row[header] || "-"}
                      </TableCell>
                    ))}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlobalTable;
