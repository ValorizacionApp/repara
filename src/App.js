import "./App.css";
import file from "./TÉRMINOS Y CONDICIONES DE USO DE REPARA.pdf";
import { Viewer } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import { Worker } from "@react-pdf-viewer/core"; // install this library

// Create new plugin instance

function App() {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();
  return (
    <div className="pdf-container">
      {file && (
        <>
          <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.6.347/build/pdf.worker.min.js">
            <Viewer fileUrl={file} plugins={[defaultLayoutPluginInstance]} />
          </Worker>
        </>
      )}
    </div>
  );
}

export default App;
