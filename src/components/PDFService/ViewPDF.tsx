import ReactPDF from '@react-pdf/renderer';
import { Champion } from '../../Types/Champion';
import { RenderChampPDF } from './RenderChampPDF';


export function ViewPDF({ champ }: { champ: Champion }) {

  
    return (
        <ReactPDF.PDFViewer showToolbar style={{ width: '100vw', height: '100vh' }}>
            <RenderChampPDF champ={champ} />
        </ReactPDF.PDFViewer>
    );
}

