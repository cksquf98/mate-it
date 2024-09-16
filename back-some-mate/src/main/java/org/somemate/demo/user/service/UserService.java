package org.somemate.demo.user.service;

import org.somemate.demo.user.dto.RecommendedUser;
import org.somemate.demo.user.dto.User;

import java.sql.SQLException;
import java.util.Map;

public interface UserService {
    User getTestUser() throws SQLException;

    String getUserMBTI(int userIdx) throws SQLException;

    RecommendedUser getMatchedUserInfo(Map<String, Object> map) throws SQLException;
}
