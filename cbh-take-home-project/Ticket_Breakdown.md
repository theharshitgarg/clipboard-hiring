# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here


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
