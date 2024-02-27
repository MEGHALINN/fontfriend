import plg from 'compromise-speech'
import nlp from 'compromise'
import say from 'say'
import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'

function speakSyllables(word) {
    nlp.extend(plg);
    let doc = nlp(word);
    let syllables = doc.syllables();
    console.log(doc.syllables());

    const speakWithDelay = (index) => {
        if (index < syllables.length) {
            const currentSyllable = syllables[index];
            
            const speakParts = (partIndex) => {
                if (partIndex < currentSyllable.length) {
                    say.speak(currentSyllable[partIndex], null, 1, (err) => {
                        if (err) {return console.error(err);}

                        // Schedule the next part
                        setTimeout(() => {
                            speakParts(partIndex + 1);
                        }, 1000);
                    });
                } 
                else {
                    // Schedule the next syllable
                    setTimeout(() => {
                        speakWithDelay(index + 1);
                    }, 1000);
                }
            };

            // Start speaking parts of the syllable from the first part
            speakParts(0);
        }
    };

    // Start speaking from the first syllable
    setTimeout(() => {
        speakWithDelay(0);
    }, 100);
}

const app = express();
const PORT = 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.get("/", cors(), (req, res) => {
    res.send("GET Request Called")
})

app.post("/", async(req, res) => {
    const {word} = req.body
    speakSyllables(word);
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});