import React, { useState } from 'react';

export default function ComponentDrawer() {
  const [isOpen, setIsOpen] = useState(false);
  const [components, setComponents] = useState([
    { id: 1, name: 'Button', description: 'A simple button component.', imageUrl: null },
    { id: 2, name: 'Input', description: 'A text input field.', imageUrl: null },
    { id: 3, name: 'Card', description: 'A container for displaying information.', imageUrl: null },
    { id: 4, name: 'Avatar', description: 'Displays a user avatar.', imageUrl: null },
    { id: 5, name: 'Dropdown', description: 'A dropdown select component.', imageUrl: null },
  ]);
  const [selectedComponent, setSelectedComponent] = useState<{ id: number; name: string; description: string; imageUrl: string | null } | null>(null);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  const handleComponentClick = (component: { id: number; name: string; description: string; imageUrl: string | null }) => {
    setSelectedComponent(component);
  };

  const handleExport = () => {
    if (selectedComponent) {
      alert(`Exporting component: ${selectedComponent.name} (This functionality is a placeholder).`);
    } else {
      alert('No component selected for export.');
    }
  };

  return (
    <div className="relative">
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        onClick={toggleDrawer}
      >
        {isOpen ? 'Close Drawer' : 'Open Component Drawer'}
      </button>

      {isOpen && (
        <div className="fixed top-0 left-0 h-full w-screen bg-gray-100 bg-opacity-75 z-50 flex justify-center items-center">
          <div className="bg-white rounded-lg shadow-xl overflow-hidden flex max-w-4xl w-full h-[80vh]">
            {/* Component List */}
            <div className="w-1/3 bg-gray-50 border-r border-gray-200 overflow-y-auto p-4">
              <h2 className="text-lg font-semibold mb-4">open drawer</h2>
              <ul>
                {components.map((component) => (
                  <li
                    key={component.id}
                    className={`p-2 rounded-md hover:bg-gray-100 cursor-pointer ${
                      selectedComponent?.id === component.id ? 'bg-blue-100' : ''
                    }`}
                    onClick={() => handleComponentClick(component)}
                  >
                    {component.name}
                  </li>
                ))}
              </ul>
            </div>

            {/* Component Preview and Actions */}
            <div className="w-2/3 p-4 flex flex-col">
              {selectedComponent ? (
                <>
                  <h2 className="text-2xl font-semibold mb-2">{selectedComponent.name}</h2>
                  <p className="text-gray-700 mb-4">{selectedComponent.description}</p>

                  <div className="flex justify-center items-center h-48 mb-4 border border-gray-300 rounded-md">
                    {selectedComponent.imageUrl ? (
                      <img src={selectedComponent.imageUrl} alt={selectedComponent.name} className="max-h-full max-w-full" />
                    ) : (
                      <div className="bg-gray-200 border-2 border-dashed rounded-xl w-32 h-32 flex justify-center items-center text-gray-500">
                         Preview
                      </div>
                    )}
                  </div>

                  <div className="flex justify-end mt-auto">
                    <button
                      className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-2"
                      onClick={handleExport}
                    >
                      Export
                    </button>
                    <button
                      className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                      onClick={toggleDrawer}
                    >
                      Close
                    </button>
                  </div>
                </>
              ) : (
                <div className="flex items-center justify-center h-full">
                  <p className="text-gray-500">Select a component to view its details.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
