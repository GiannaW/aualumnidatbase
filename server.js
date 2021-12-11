const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

const mongoose =require('mongoose');
const bodyParser=require("body-parser");


app.use(bodyParser.urlencoded({extended:true}));

mongoose.connect('mongodb+srv://gianna-admin:CoolScienceGirl123@cluster0.1ruwh.mongodb.net/FinalDatabase4',{useNewUrlParser:true},{useUnifedTopology:true});

app.use(express.static(__dirname + '/stylesheets'));


const IntroInformationScehma = {

    Name:String,
    Pronouns:String,
    Email:String,
    Major:String,
    TypeofJob:String,
    
    Question3:String,
    Question4:String,
    Question5:String,
    Question6: String,
    Question7:String,
    Question8:String,
    Question9:String

}

const IntroInfo =mongoose.model("Intro",IntroInformationScehma);

app.get("", (req, res) => {
  res.sendFile(__dirname+'/alumni-survey.html');
});



app.post("/",function(req,res){

    let newIntro= new IntroInfo ({
        Name:req.body.Name,
        Pronouns: req.body.Pronouns,
        Email:req.body.Email,
        Major:req.body.Major,
        Postgrad:req.body.Postgrad,
        TypeofJob:req.body.TypeofJob,
        Question3:req.body.Question3,
        Question4:req.body.Question4,
        Question5:req.body.Question5,
        Question6: req.body.Question6,
        Question7:req.body.Question7,
        // Question8:req.body.Question8,
        Question9:req.body.Question9
        


    });
    newIntro.save();
    res.redirect("/");
})

app.listen(PORT, () => {
  console.log(`App up at port ${PORT}`);
});
