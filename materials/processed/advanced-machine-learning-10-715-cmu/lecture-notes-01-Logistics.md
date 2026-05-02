# lecture-notes-01-Logistics

Source: `materials/archive/advanced-machine-learning-10-715-cmu/piazza-resources/lecture-notes-01-Logistics.pdf`
Duplicate equivalents: `lecture-notes-01-Logistics.pdf`
Extraction engine: `Gemini API (gemini-3-flash-preview)`
Strategy: `chunked inline-PDF conversion`
Finish reason: `STOP`
Pages: 17

## Page 1
### Content
10-715 Fall 2025: 
Advanced Introduction to 
Machine Learning

Nihar B. Shah

Machine Learning Department | Carnegie Mellon University School of Computer Science
### Visual Description
Title slide with the course number and name, instructor's name, and the logos for the Machine Learning Department and Carnegie Mellon University School of Computer Science.

---

## Page 2
### Content
OK
WHAT DID I GET MYSELF INTO
### Visual Description
A meme image showing a person in a high-altitude pressure suit (Felix Baumgartner) standing on the edge of a capsule high above the Earth, preparing to jump. The text "OK" is at the top and "WHAT DID I GET MYSELF INTO" is at the bottom in a bold, white font.

---

## Page 3
### Content
* This class is best for you if you have machine learning at the **CORE** of your studies/research, and want to understand the fundamentals. This class will be **HEAVY** and will move **FAST**.
* If machine learning is an auxiliary component of your studies/research or if you do not have the required background, you may consider the general graduate Machine Learning course (10-701) or the Masters-level Machine Learning course (10-601).
* Pre-existing strong working knowledge of probability, calculus, linear algebra, and programming (we'll be supporting Python).
* This is an **<u>introduction</u>** to ML course. Knowing ML is NOT a prerequisite, and we will not assume any pre-existing knowledge of ML.
### Visual Description
Text-only slide.

---

## Page 4
### Content
Roughly two parts

* **Part 1: Depth**
    * Perspectives for thinking about ML
    * Theory and fundamentals
    * Some algorithms, used as examples

* **Part 2: Breadth**
    * Many settings for ML
    * Many kinds of algorithms
    * Many problems
### Visual Description
Text-only slide.

---

## Page 5
### Content
Teaching team

TAs:
* Naveen Raman
* Jacob Springer
* Rishav Mukherji
* Vishisht Rao

EA:
* Joshmin Ray

{naveenr, jspringe, rishavm, vsrao, joshminr}@andrew.cmu.edu
### Visual Description
The slide features portrait photos of the four TAs (Naveen Raman, Jacob Springer, Rishav Mukherji, Vishisht Rao) and the EA (Joshmin Ray) with their names underneath. A collective email address is listed at the bottom.

---

## Page 6
### Content
Major changes this year

* Three ”modules” taught by MLD faculty
    * History of ML by Tom Mitchell
    * Attention and transformers by Zico Kolter
    * Diffusion models and GANs by Barnabas Poczos
### Visual Description
Text-only slide.

---

## Page 7
### Content
Materials

* **Text book** for part of the course: “Understanding Machine Learning: From Theory to Algorithms” by Shai Shalev-Shwartz and Shai Ben-David
https://www.cs.huji.ac.il/~shais/UnderstandingMachineLearning/understanding-machine-learning-theory-algorithms.pdf
* **Lecture format:** Most lectures on the board
* Additional material will be posted on Piazza for each lecture as we go along
### Visual Description
Text-only slide.

---

## Page 8
### Content
Lecture schedule

* See Piazza
* Monday and Wednesday for lectures
* Recitations and some makeup lectures on some Fridays
* Recitations meant to cover relevant parts of 36705 + optimization
    * Optional but highly encouraged
### Visual Description
Text-only slide.
## Page 9
### Content
# Lecture videos

* On Panopto
* Will put link on Piazza
### Visual Description
Text-only slide.

---
## Page 10
### Content
* TA office hours
    * See Piazza for schedule
    * Point of contact for homeworks
* Instructor office hours: To set up a meeting, please send me an email with your availability, as well as the topics you would like to discuss (e.g., specific lectures). My email address is nihars@cs.cmu.edu Please include **10-715** in the subject line of any emails to me regarding the course.
### Visual Description
Text-only slide.

---
## Page 11
### Content
# Points

* 25% Midterm
* 40% Final
* 30% Homework
* 5% Class participation (Piazza polls)
### Visual Description
A meme image in the bottom right corner shows a skeptical-looking baby with the caption: "YOU MEAN TO TELL ME I HAVE TO WORK HARD TO GET GOOD GRADES".

---
## Page 12
### Content
# Midterm and final

* Midterm : Everything covered until the midterm date
* Final: Everything covered after the midterm
* Midterm in class, during class hours
* Final in finals week. University will announce date/time/location.
* Closed book, no cheat sheet etc. Remember to get pens/pencils
* Only material covered in lectures is in the syllabus
    * If it is there in lecture notes or text book etc. but was not covered in class, then it is not in syllabus
    * Recitations are not in the syllabus for the exams
* We’ll post previous years’ midterms and finals on Piazza a few weeks before the exam
### Visual Description
Text-only slide.

---
## Page 13
### Content
# Homeworks

* 7 homeworks throughout the semester
* Each homework will come with an associated deadline (8-10 days after it is released)
* You get 3 “late days” for each homework
    * To be used only if there is a major emergency
    * Honor code
* For each student, we will drop one homework with the lowest score
* Submission instructions will be provided along with each homework
* Homeworks meant to be *extension* of material covered in lectures
### Visual Description
Text-only slide.

---
## Page 14
### Content
# Homework policy

* You may discuss with other students
* Each student writes their own answers
* Each student must write their own code for the programming part
* Ok to ask LLMs for code snippets that are not related to ML (e.g., read a csv file) but not for parts that are focus of your assignment (e.g., to write a neural network code)
* **Important:** You can discuss with other students but you must write/code up your own solutions. Please don’t search for answers on the web, previous years’ homeworks, etc. (please ask the TAs if you are not sure if you can use a particular reference)
* Contact TAs for any questions
### Visual Description
A meme image in the bottom right corner features Austin Powers with the caption: "I SEE YOU'RE DOING YOUR MATH HOMEWORK IN PEN I TOO LIKE TO LIVE DANGEROUSLY".

---
## Page 15
### Content
# Class participation

* Poll on Piazza
    * Will remain open for 24 hours after each regular lecture
    * Please try your best to think about the question in the poll and give the right answer. That said, it will not be graded on correctness (but you may get an email from me asking you to justify your answer)
    * Score for each poll: {1=answered, 0=not answered}
* Will start in week 2 (i.e., next week); I will put out a test poll later this week
* For each student, we’ll eventually drop two polls with lowest scores
### Visual Description
Text-only slide.

---
## Page 16
### Content
# Study groups

* Very useful to form one
* Just make a post on Piazza (“I am [introduction] I am looking for a study group for 10-715… please ping me at [email]”)
### Visual Description
An illustration in the top right corner shows a group of diverse people sitting around a circular table, collaborating with laptops. Above them are thought bubbles containing various icons: a question mark, a brain, a lightbulb, a checkmark, gears, and a DNA helix.

---
## Page 17

### Content

In the lectures: Interact!!!

* Please ask questions
* Give answers
* Raise hand
* Shout it out

**Makes a HUGE difference to your learning experience!**

### Visual Description

To the right of the text, there is a graphic consisting of five overlapping speech bubbles in different colors: red, orange, light orange, teal, and blue. Each speech bubble contains a white question mark. The final sentence at the bottom is written in a large, bold, red font.

---
