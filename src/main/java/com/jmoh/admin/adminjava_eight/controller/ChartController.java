package com.jmoh.admin.adminjava_eight.controller;

import com.jmoh.admin.adminjava_eight.domain.XmlExplorer;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletResponse;

@Controller
public class ChartController {

    Logger logger = LoggerFactory.getLogger(ChartController.class);


    @Autowired
    XmlExplorer xmlExplorer;


    @GetMapping("/")
    public String chart(Model model) {
        return "index";
    }


    @GetMapping("getData.do")
    @ResponseBody
    public String getElectiondata(@RequestParam("chartname") String chartname, @RequestParam("local") String local,
                                  HttpServletResponse response) throws Exception {
        StringBuilder logbuilder = new StringBuilder();
        logbuilder.append("차트명: ");
        logbuilder.append(chartname);
        logbuilder.append(" 지역명: ");
        logbuilder.append(local);
        logger.info(logbuilder.toString());
        xmlExplorer.setLocationPattern(local);
        String result = "";

        Cookie cookie = new Cookie("xmlcnt", Integer.toString(xmlExplorer.getFilecnt()));
        response.addCookie(cookie);
        cookie.setMaxAge(60 * 60 * 24);
        result = xmlExplorer.getDataAPI(chartname);


        return result;
    }
}
