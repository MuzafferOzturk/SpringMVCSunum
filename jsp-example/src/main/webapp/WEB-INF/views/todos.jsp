<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ page contentType="text/html; charset=UTF-8" %>
<html>
<head>
    <title>Welcome</title>
    <link href="webjars/bootstrap/3.3.6/css/bootstrap.min.css"
          rel="stylesheet">
</head>
<body>
<div class="container">
    <table class="table table-striped">
        <caption>Your todos</caption>
        <thead>
        <tr>
            <th>Description</th>
            <th>Target Date</th>
            <th>Is it Done?</th>
            <th>Edit</th>
            <th>Delete</th>
        </tr>
        </thead>
        <tbody>
        <c:forEach var="todo" items="${todos}">
            <tr>
                <td>${todo.description}</td>
                <td>${todo.localDate}</td>
                <td>${todo.isDone == true ? "Yes" : "No"}</td>
                <td><a class="btn btn-warning" href="/edit-todo">Edit Todo</a></td>
                <td><a class="btn btn-warning" href="/delete-todo">Delete Todo</a></td>
            </tr>
        </c:forEach>
        </tbody>
    </table>
    <div>
        <a class="btn btn-default" href="/add-todo">Add a Todo</a>

    </div>
    <script src="webjars/bootstrap/3.3.6/js/bootstrap.min.js"></script>
</div>
</body>
</html>