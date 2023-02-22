
const GitHubService = require("../../services/GitHub.service");
const TaskRegisterService = require("../../services/TaskRegisterService");
const UserRegisterService = require("../../services/UserRegisterService");

module.exports = () => ({
    gitHubService: GitHubService,
    userRegisterService: UserRegisterService,
    tasksRegisterService: TaskRegisterService,
})