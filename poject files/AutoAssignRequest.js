
// AutoAssignRequest.js
(function executeRule(current, gForm, gUser, gSNC) {
    if (!current.assigned_to) {
        current.assigned_to = 'IT Support Group';
    }
})(current, gForm, gUser, gSNC);
