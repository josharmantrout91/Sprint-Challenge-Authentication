1. What is the purpose of using _sessions_?
   We use sessions to persist data across requests so that users aren't having to re-authN and re-authZ every time they want to move around a website/app.

2. What does bcrypt do to help us store passwords in a secure manner.
   bcrypt lets us hash passwords so that they're encrypted

3. What does bcrypt do to slow down attackers?
   bcrypt has an algorithm that hashes the information multiple times, which means an attacker needs to have the hash, know the algorithm used, and how many rounds were used to generate the hash in the first place.

4. What are the three parts of the JSON Web Token?
   Header, payload, and signature
