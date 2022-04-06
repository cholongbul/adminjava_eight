package com.jmoh.admin.adminjava_eight.domain;

import com.jmoh.admin.adminjava_eight.util.XmlChanger;
import org.springframework.core.io.DefaultResourceLoader;
import org.springframework.core.io.Resource;
import org.springframework.core.io.support.ResourcePatternUtils;
import org.springframework.stereotype.Component;
import org.w3c.dom.Document;

import java.io.*;

@Component
public class XmlExplorer {

    private String locationPattern;

    private Resource[] resources;

    public void setLocationPattern(String local) throws IOException {
        StringBuilder sb = new StringBuilder();
        sb.append("/static/data/");
        sb.append(local);
        sb.append("/");
        String locationPattern = sb.toString();
        this.locationPattern = locationPattern;

        StringBuilder sb2 = new StringBuilder();
        sb2.append("classpath:");
        sb2.append(locationPattern);
        sb2.append("*");

        Resource[] resources = ResourcePatternUtils.getResourcePatternResolver(new DefaultResourceLoader()).getResources(sb2.toString());
        this.resources = resources;
    }

    public int getFilecnt() {
        int filecnt = resources.length;
        return filecnt;
    }

    public String getDataAPI(String chartname) {
        String filename = "";
        for (Resource res : resources) {
            if (res.getFilename().toLowerCase().contains(chartname)) {
                filename = res.getFilename();
                System.out.println(filename);
                break;
            }
        }

        File file = getFile(filename);

        Document xmldom = XmlChanger.convertXMLFileToXMLDocument(file);
        String xmlstring = XmlChanger.convertXmlDocumentToString(xmldom);

        return xmlstring;

    }

    private File getFile(String filename) {
        File file = null;
        try {
            InputStream input = getClass().getResourceAsStream(locationPattern + filename);
            file = File.createTempFile("tempfile", ".tmp");
            OutputStream out = new FileOutputStream(file);
            int read;
            byte[] bytes = new byte[1024];

            while ((read = input.read(bytes)) != -1) {
                out.write(bytes, 0, read);
            }
            out.close();
            file.deleteOnExit();
        } catch (IOException ex) {
            ex.printStackTrace();
        }
        return file;
    }
}
