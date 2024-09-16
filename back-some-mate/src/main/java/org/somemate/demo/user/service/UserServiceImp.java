package org.somemate.demo.user.service;

import org.somemate.demo.user.dao.UserDao;
import org.somemate.demo.user.dto.RecommendedUser;
import org.somemate.demo.user.dto.User;
import org.springframework.stereotype.Service;

import java.sql.SQLException;
import java.util.Map;

@Service
public class UserServiceImp implements UserService {
    UserDao userDao;
    public UserServiceImp(UserDao userDao) {this.userDao = userDao;}

    @Override
    public User getTestUser() throws SQLException {
        return userDao.getTestUser();
    }

    @Override
    public String getUserMBTI(int userIdx) throws SQLException {
        return userDao.getUserMBTI(userIdx);
    }


    @Override
    public RecommendedUser getMatchedUserInfo(Map<String, Object> map) throws SQLException {
        return userDao.getMatchedUserInfo(map);
    }
}
