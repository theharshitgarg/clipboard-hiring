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
