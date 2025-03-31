import React, { useState, useEffect } from 'react';
import AceEditor from 'react-ace';
import axios from 'axios';
import {Play, Moon, Sun } from "lucide-react";

// Import necessary ace modes and themes
import 'ace-builds/src-noconflict/mode-python';
import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/mode-c_cpp';
import 'ace-builds/src-noconflict/theme-monokai';
import 'ace-builds/src-noconflict/theme-github';

const Compiler = () => {
  const [language, setLanguage] = useState('python');
  const [code, setCode] = useState('');
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [loading, setLoading] = useState(false);
  const [editorTheme, setEditorTheme] = useState('monokai');

  // Default code templates
  const defaultCode = {
    python: '# Write your Python code here\n\ndef solution():\n    # Your code here\n    pass\n\nprint(solution())',
    javascript: '// Write your JavaScript code here\n\nfunction solution() {\n    // Your code here\n    return;\n}\n\nconsole.log(solution());',
    cpp: '#include <iostream>\nusing namespace std;\n\nint solution() {\n    // Your code here\n    return 0;\n}\n\nint main() {\n    cout << solution() << endl;\n    return 0;\n}'
  };

  // Set default code when language changes
  useEffect(() => {
    setCode(defaultCode[language]);
  }, [language]);

  // Handle language change
  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  };

  // Handle theme change
  const handleThemeChange = () => {
    setEditorTheme(editorTheme === 'monokai' ? 'github' : 'monokai');
  };

  // Execute code
  const executeCode = async () => {
    setLoading(true);
    setOutput('Executing...');
    
    try {
      const response = await axios.post(`${import.meta.env.VITE_BACKEND_API}/api/v1/execute`, {
        code,
        language,
        input
      });
      
      if(response.data.status === 'Accepted') {
        setOutput(response.data.stdout || 'No output');
      } else {
        setOutput(`Error: ${response.data.stderr || response.data.compile_output || response.data.message || 'Unknown error'}`);
      }
    } catch (error) {
      setOutput(`Server Error: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-screen bg-gray-50 dark:bg-gray-900">
      <div className="bg-black dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-4 py-3 flex justify-between items-center shadow-sm">
        <div className="flex items-center space-x-4">
          <select 
            value={language} 
            onChange={handleLanguageChange}
            className="px-3 py-2 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="python">Python</option>
            <option value="javascript">JavaScript</option>
            <option value="cpp">C++</option>
          </select>
          <button
            onClick={handleThemeChange}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
            aria-label="Toggle theme"
          >
            {editorTheme === 'monokai' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
        <button 
          onClick={executeCode} 
          disabled={loading}
          className={`flex items-center space-x-2 px-4 py-2 rounded-md font-medium text-white transition-colors ${
            loading ? 'bg-gray-500 cursor-not-allowed' : 'bg-green-600 hover:bg-green-700'
          }`}
        >
          <Play size={16} />
          <span>{loading ? 'Executing...' : 'Run Code'}</span>
        </button>
      </div>

      {/* Editor Layout */}
      <div className="flex flex-col md:flex-row flex-1 overflow-hidden">
        {/* Code Section */}
        <div className="md:w-3/5 h-1/2 md:h-full border-r border-gray-200 dark:border-gray-700 flex flex-col">
          <div className="bg-gray-100 dark:bg-gray-800 px-4 py-2 font-medium text-gray-700 dark:text-gray-300 border-b border-gray-200 dark:border-gray-700">
            Code
          </div>
          <div className="flex-1 overflow-hidden">
            <AceEditor
              mode={language === 'cpp' ? 'c_cpp' : language}
              theme={editorTheme}
              name="code-editor"
              value={code}
              onChange={setCode}
              fontSize={14}
              width="100%"
              height="100%"
              showPrintMargin={true}
              showGutter={true}
              highlightActiveLine={true}
              setOptions={{
                enableBasicAutocompletion: false,
                enableLiveAutocompletion: false,
                enableSnippets: false,
                showLineNumbers: true,
                tabSize: 2,
              }}
            />
          </div>
        </div>
        
        {/* Input/Output Section */}
        <div className="md:w-2/5 h-1/2 md:h-full flex flex-col">
          {/* Input */}
          <div className="h-1/2 flex flex-col border-b border-gray-200 dark:border-gray-700">
            <div className="bg-gray-100 dark:bg-gray-800 px-4 py-2 font-medium text-gray-700 dark:text-gray-300 border-b border-gray-200 dark:border-gray-700">
              Input
            </div>
            <div className="flex-1 overflow-hidden">
              <AceEditor
                mode="text"
                theme={editorTheme}
                name="input-editor"
                value={input}
                onChange={setInput}
                fontSize={14}
                width="100%"
                height="100%"
                showPrintMargin={false}
                showGutter={true}
                highlightActiveLine={true}
                setOptions={{
                  showLineNumbers: true,
                  tabSize: 2,
                }}
              />
            </div>
          </div>
          
          {/* Output */}
          <div className="h-1/2 flex flex-col">
            <div className="bg-gray-100 dark:bg-gray-800 px-4 py-2 font-medium text-gray-700 dark:text-gray-300 border-b border-gray-200 dark:border-gray-700">
              Output
            </div>
            <div className="flex-1 overflow-hidden">
              <AceEditor
                mode="text"
                theme={editorTheme}
                name="output-editor"
                value={output}
                readOnly={true}
                fontSize={14}
                width="100%"
                height="100%"
                showPrintMargin={false}
                showGutter={true}
                highlightActiveLine={false}
                setOptions={{
                  showLineNumbers: true,
                  tabSize: 2,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Compiler;