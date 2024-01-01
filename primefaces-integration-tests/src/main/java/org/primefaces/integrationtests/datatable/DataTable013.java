/*
 * The MIT License
 *
 * Copyright (c) 2009-2024 PrimeTek Informatics
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
package org.primefaces.integrationtests.datatable;

import lombok.Data;
import org.primefaces.component.datatable.DataTable;
import org.primefaces.model.SortMeta;
import org.primefaces.model.SortOrder;

import javax.annotation.PostConstruct;
import javax.faces.context.FacesContext;
import javax.faces.view.ViewScoped;
import javax.inject.Inject;
import javax.inject.Named;
import java.io.Serializable;
import java.util.*;

@Named
@ViewScoped
@Data
public class DataTable013 implements Serializable {

    private static final long serialVersionUID = 7843156490297905919L;

    private List<ProgrammingLanguage> progLanguages;

    private List<SortMeta> sortBy;

    @Inject
    private ProgrammingLanguageService service;

    @PostConstruct
    public void init() {
        progLanguages = service.getLangs();

        sortBy = new ArrayList<>();
        sortBy.add(SortMeta.builder().field("firstAppeared").order(SortOrder.DESCENDING).priority(1).build());
        sortBy.add(SortMeta.builder().field("name").order(SortOrder.ASCENDING).priority(2).build());
    }

    public void resetTable() {
        DataTable dataTable = (DataTable) FacesContext.getCurrentInstance().getViewRoot().findComponent("form:datatable");
        dataTable.reset();

        progLanguages = service.getLangs(); //progLanguages may have been sorted from DataTable
    }

}