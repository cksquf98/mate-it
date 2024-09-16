package org.somemate.demo.user.dao;

import org.apache.ibatis.annotations.Mapper;
import org.somemate.demo.user.dto.RecommendedUser;
import org.somemate.demo.user.dto.User;

import java.sql.SQLException;
import java.util.Map;

@Mapper
public interface UserDao {
    User getTestUser() throws SQLException;
    String getUserMBTI(int userIdx) throws SQLException;
    RecommendedUser getMatchedUserInfo(Map<String, Object> map) throws SQLException;
}
