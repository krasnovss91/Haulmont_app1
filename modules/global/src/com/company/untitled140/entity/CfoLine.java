package com.company.untitled140.entity;

import com.haulmont.cuba.core.entity.StandardEntity;

import javax.persistence.*;

@Table(name = "UNTITLED140_CFO_LINE")
@Entity(name = "untitled140$CfoLine")
public class CfoLine extends StandardEntity {
    private static final long serialVersionUID = -2406050337660103079L;

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "CFO_ID")
    protected CFO cfo;

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "EXPENCE_ITEM_ID")
    protected ExpenceItem expenceItem;

    @Column(name = "SUM_")
    protected Integer sum;

    public Integer getSum() {
        return sum;
    }

    public void setSum(Integer sum) {
        this.sum = sum;
    }

    public ExpenceItem getExpenceItem() {
        return expenceItem;
    }

    public void setExpenceItem(ExpenceItem expenceItem) {
        this.expenceItem = expenceItem;
    }

    public CFO getCfo() {
        return cfo;
    }

    public void setCfo(CFO cfo) {
        this.cfo = cfo;
    }
}