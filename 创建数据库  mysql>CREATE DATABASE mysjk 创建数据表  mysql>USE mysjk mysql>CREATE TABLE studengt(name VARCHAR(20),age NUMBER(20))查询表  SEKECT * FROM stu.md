1. 创建数据库

   ```	
   mysql>CREATE DATABASE mysjk 
   ```

2. 创建数据表

   ```
   mysql>USE mysjk 
   mysql>CREATE TABLE studengt(name VARCHAR(20),age NUMBER(20))
   ```

   ​

3. 查询表

   ```
   SEKECT * FROM student WHERE name = '佳军'
   ```

4. 插入数据

   ```
   INSERT INTO student (name,age) VALUES('李四',20)
   ```

5. 删除数据

   ```
   5.删除数据 DELETE FROM student WHERE name='王二'
   ```

6. 修改数据

   ```	
   6.修改数据 UPDATE student SET age = 15 WHERE name='二狗'
   ```

7. 删除表

   ```
    DELETE * FROM student
   ```

   ​