This project contains two challenges - a "Ticket Breakdown" challenge and a "Refactoring" challenge. The two challenges are unrelated, but you should complete both in the same folder and share the link in Coderbyte. Any written answers should be included in markdown files within this folder.


## [Ticket Breakdown](Ticket_Breakdown.md)

```
Usecase :  Generate Agent ID for Facility Subsystem.

Ticket 1 : Write an unique generator for genetating AgentID in the facilities sub-subsystem.
    The generator should generate 12 digit long id in sequential manner.

  Acceptance Criteria:
     1. Id should be unique
     2. Sequential order should be maintained
     3. Take care of race conditions
     4. Should handle production loads


  Estimation:
    Development :  8 hours  
    Testing     : 10 hours


Ticket 2 : Generate mapper for mapping internal generated Agent ID with external Agent ID.
    The one-to-one mapping should have the following fields
      a) Internal AgentID
      b) External AgentID
      c) DoneAt : Timestamp
      d) CreatedAt : Timestamp


  Acceptance Criteria:
     1. Take care of race conditions
     2. Should handle production loads (1000 request / second)


  Estimation:
    Development :  8 hours  
    Testing     : 10 hours



Ticket 3 : Write an autoamation script for mapping current production external ID to new geneated internal ID.
    The script should be configurable for the following:
      a). factory id: Given a factory id, all ids should be mapped 
      b). if "all" is given, all factory mapping should be done


  Acceptance Criteria:
     1. Configurability should be handled
     2. Take care of race conditions
     3. Should handle production loads (1000 request / second)


  Estimation:
    Development :  12 hours  
    Testing     :  15 hours


```

## [Refactoring](Refactoring.md)

If you are a JS novice, here's how to get started:
1. [Install Node.js](https://nodejs.org/en/download/) (we use `^16`, the latest LTS)
2. Run `npm i` in this repo to install dependencies
3. Run `npm test` to run the automated tests
4. Run `npm start` to launch `index.js` for any manual testing

```
Considerations for refactoring

1. Correctness
2. Readability
3. Reusability

The decision to move the hash creation functionality is done for reusability and testability and maintainability purposees. Hence, a new function createDPKHash is created which is reused as required.

The number of statements are reduced by removing/restructuring the if else condition blocks by using code optimization principles ensuring the correctness.

```