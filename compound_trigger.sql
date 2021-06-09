create or replace trigger trg_tbl_tvm_mk
for insert or update  on mk_tvm_payment_detail
compound trigger
   -- declarative section (optional)
   -- variables declared here have firing-statement duration.
     v_text varchar2(30);
     --executed before dml statement
     before statement is
     begin
       v_text := 'before state';
     end before statement;
   
     --executed before each row change- :new, :old are available
     before each row is
     begin
       dbms_output.put_line('v_text : ' || v_text);
       v_text := 'before each state'; 
     end before each row;
   
     --executed aftereach row change- :new, :old are available
     after each row is
     begin
       dbms_output.put_line('v_text : ' || v_text);
       v_text := 'after each state';       
     end after each row;
   
     --executed after dml statement
     after statement is
     begin
       dbms_output.put_line('v_text : ' || v_text);
     end after statement;

end;
/
