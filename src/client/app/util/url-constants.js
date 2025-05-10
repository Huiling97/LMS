const URLConstants = {};

URLConstants.BASE = 'http://localhost:3001';

URLConstants.LOGIN_PATH = `${URLConstants.BASE}/api/v1/login`;
URLConstants.COURSES_PATH = `${URLConstants.BASE}/api/v1/courses`;
URLConstants.ENROLLMENTS_PATH = `${URLConstants.BASE}/api/v1/enrollments`;
URLConstants.ENTRIES_PATH = `${URLConstants.BASE}/api/v1/entries`;
URLConstants.LOGINS_PATH = `${URLConstants.BASE}/api/v1/logins`;
URLConstants.TOPICS_PATH = `${URLConstants.BASE}/api/v1/topics`;
URLConstants.USERS_PATH = `${URLConstants.BASE}/api/v1/users`;

export default URLConstants;
