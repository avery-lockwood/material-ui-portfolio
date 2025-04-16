import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";

/*the plan for this is to */
const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: "#060804",
    height: "100%",
  },
  cardContainer: {
    maxWidth: 345,
    margin: "1rem auto",
  },
}));

const  Article1= () => {
    const classes = useStyles();
    return (
      
      <Box component="div" className={classes.mainContainer}>
        
      </Box>
    );
  };
export default Article1;
/*
    ## Gender experience in stem and trades

Hi, I am a transgender tradeswoman and engineering student. I have been working in the trades and studying to become an engineer for all my adult life and here are some of my experinces.

### Being told not to use gender neutral bathrooms

At one job I worked at I was told not to use gender neutral bathrooms and only to use them men's room because "the wearhouse staff is too messy". Of course I did not follow this rule but it seemed extremely odd to me that a company would have gender neutral bathrooms, and specifically deny them to their only (that i knew of) transgender employee.

### Before coming out, doors where open that have since closed.

I found that on job applications, if I clairified that I had a preferred name that was different to my legal name, I was almost never called back. If I just entered my legal name, I was called back. since then I have legally changed my name and get more responses, but they are not as common as before I changed my name to begin with. 

### Being assumed male and competend, or female  and incompetent

One of the hardest and most important aspects of my transition for me is voice training. Feminizing hormone therapy does not affect vocal chords so we have to train them. This means that I can do a strong deep male voice, or a light resonand feminine voice. When I use a depper voice, even though my words are the same, I am repected for my knowledge. If I use a higher voice, men tend to disregard what I have to say despite in many cases me having more experience.

I find that often people will approach me with questions. I am a transgender woman and don't exactly look like a cisgender woman or man, so people ask things. I want to give people the room to mess up and the time to learn to better understand what gender is, why it matters and what I am, but it gets exhausting and sometimes the questions get a little.... inapropriate.

#### List of questions I have been asked that i am ok with
- Is a trans woman male to female or female to male
- What are your pronouns?
- Do you want to be refered to as a man or woman?

#### List of questions that I have not been okay with
- If I wanted to have a baby with you would you want to wear the bump for 9 months
- Do trans women like agressive men
- What are you, biologically
- Why are trans people depressed?

There is asking a question and then there is harassment. I want to give people room to learn but its more important to protect marginalized people than it is to give non-marginalized people room to make mistakes. 
*/