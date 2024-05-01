import { Page, Text, View, Document, StyleSheet, Font, Image, usePDF } from '@react-pdf/renderer';
import ReactPDF from '@react-pdf/renderer';
import { Champion } from '../../Types/Champion';

// Create styles

Font.register({ family: 'lolfont', src: 'https://s.lolstatic.com/awesomefonts/1.0.0/Fonts/BeaufortforLOL-HeavyItalic.ttf', fontStyle: 'normal', fontWeight: 'normal' });


const styles = StyleSheet.create({
    page: {
        flexDirection: 'column',
        backgroundColor: '#E4E4E4',

    },
    section: {
        margin: 10,
        padding: 10,

    },
    textsm: {
        fontSize: 18,
        fontFamily: 'lolfont',
    },
    textmd: {
        fontSize: 50,
        fontFamily: 'lolfont',
    }

});



// Create Document Component 
const RenderChampPDF = ({ champ }: { champ: Champion }) => {
    const regex = /(<([^>]+)>)/gi;

    return (
        <Document title={`${champ.name} - ${champ.title}`} pageMode='fullScreen'>
            <Page size="A4" style={styles.page}>


                <View style={[styles.section, { position: 'absolute', bottom: '4%', left: '170px', color: 'white' }]}>

                    <View style={[styles.section, { display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }]}>
                        <Text style={styles.textmd}>{champ.name.toUpperCase()}</Text>
                        <Text style={styles.textsm}>{champ.title.toUpperCase()}</Text>
                    </View>


                </View>
                <Image style={{ width: '100%', height: '100%', zIndex: '-5', objectFit: 'cover' }} src={`https://ddragon.leagueoflegends.com/cdn/img/champion/centered/${champ.id}_0.jpg`} />



            </Page>


            <Page size="A4" style={styles.page}>
                <Image style={{ width: '100%', height: '40%', zIndex: '-5', objectFit: 'cover' }} src={`https://ddragon.leagueoflegends.com/cdn/img/champion/centered/${champ.id}_1.jpg`} />
                <View style={[styles.section, { paddingBottom: 0, marginBottom: 0 }]}>
                    <Text style={styles.textsm}>HISTORIA</Text>
                    <Text style={{ fontSize: '12' }}>{champ.lore}</Text>
                </View>

                {/**Habilidades */}
                <View style={[styles.section, { maxWidth: '520px' }]}>
                    <Text style={styles.textsm}>HABILIDADES</Text>
                    <View style={{ display: 'flex', gap: 10, marginTop: '1vh' }}>

                        <View style={{ display: 'flex', flexDirection: 'row', gap: 5 }}>
                            <Image style={{ width: '40px', height: '40px' }} src={`https://ddragon.leagueoflegends.com/cdn/14.8.1/img/passive/${champ.passive.image.full}`} />
                            <View style={{ display: 'flex', flexDirection: 'column' }}>
                                <Text style={[styles.textsm, { fontSize: '11px' }]}>{champ.passive.name}</Text>
                                <Text style={{ fontSize: '10px' }}>{champ.passive.description.replace(regex, '')}</Text>
                            </View>
                        </View>
                        {champ.spells.map((spell, index) => {


                            return (
                                <View key={index} style={{ display: 'flex', flexDirection: 'row', gap: 5 }}>
                                    <Image style={{ width: '40px', height: '40px' }} src={`https://ddragon.leagueoflegends.com/cdn/14.8.1/img/spell/${spell.id}.png`} />
                                    <View key={index} style={{ display: 'flex', flexDirection: 'column' }}>
                                        <Text style={[styles.textsm, { fontSize: '11px' }]}>{spell.name}</Text>
                                        <Text style={{ fontSize: '10px' }}>{spell.description.replace(regex, '')}</Text>
                                    </View>
                                </View>
                            )
                        }


                        )}
                    </View>

                </View>
                
            </Page>




        </Document>
    )
};


export function ViewPDF({ champ }: { champ: Champion }) {

  
    return (
        <ReactPDF.PDFViewer showToolbar style={{ width: '100vw', height: '100vh' }}>
            <RenderChampPDF champ={champ} />
        </ReactPDF.PDFViewer>
    );
}

