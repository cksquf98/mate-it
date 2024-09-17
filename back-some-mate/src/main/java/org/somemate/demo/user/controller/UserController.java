package org.somemate.demo.user.controller;

import org.somemate.demo.user.dto.RecommendedUser;
import org.somemate.demo.user.dto.User;
import org.somemate.demo.user.service.UserService;
import org.somemate.demo.util.JWTUtil;
import org.springframework.web.bind.annotation.*;

import java.sql.SQLException;
import java.util.HashMap;
import java.util.Map;

@RestController
@CrossOrigin("*")
@RequestMapping("/user")
public class UserController {
    UserService userService;
    JWTUtil jwtUtil;
    User user;
    RecommendedUser recommendedUser;


    public UserController(UserService userService, JWTUtil jwtUtil) {
        this.userService = userService;//생성자 주입
        this.jwtUtil = jwtUtil;            //생성자 주입
    }

    @GetMapping
    @RequestMapping("/test")
    public User test() {

        try {
            user = userService.getTestUser();
            System.out.println("user service : " + user);
        } catch (SQLException e) {
            e.printStackTrace();
            user = null;
        }
        return user;
    }


//    @GetMapping
//    @RequestMapping("/mbti/{userIdx}")
//    public String getUserMBTI(@PathVariable int userIdx) {
//        System.out.println("user : "+userIdx);
//        String userMBTI = "";
//        try {
//            userMBTI = userService.getUserMBTI(userIdx);
//        } catch (SQLException e) {
//            e.printStackTrace();
//        }
//
//        return userMBTI;
//    }

    @GetMapping
    @RequestMapping("/getMatchedUserInfo/{userIdx}")
    public RecommendedUser getMatchedUserInfo(@PathVariable int userIdx) throws SQLException
    {
        try {
            String mbti = userService.getUserMBTI(userIdx);
            System.out.println("mbti : " + mbti);
            Map<String, Object> map = new HashMap<>();
            map.put("userIdx", userIdx);
            map.put("mbti", mbti);

            recommendedUser = userService.getMatchedUserInfo(map);
        } catch (Exception e) {
            e.printStackTrace();
        }

        return recommendedUser;
    }

    @PatchMapping("/updateUserMbti")
    public int updateUserMbti(@RequestBody User user) throws SQLException {
        int result = -1;
        System.out.println("user : " + user.toString());
        try {
            result = userService.updateUserMbti(user);

        } catch (Exception e) {
            e.printStackTrace();
        }
        return result;
    }


}
