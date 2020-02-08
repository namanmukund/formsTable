const data = [
  {
     "MappingColumnName":"Status",
     "DisplayName":"Status",
     "Filtering":"false",
     "headerStyle":"position: sticky,left: 0,zIndex: 11",
     "cellStyle":"position: sticky,left: 0,backgroundColor: #fff,padding: 0",
     "Search":false,
     "Editable":null,
     "ScrnDisplay":true,
     "Type":"BOOL",
     "Active":true,
     "ColumnOrder":1,
     "Options":null
  },
  {
     "MappingColumnName":"SubledgerSystemName  ",
     "DisplayName":"Subledger System Name  ",
     "Filtering":"false",
     "headerStyle":"position: sticky,left: 60,zIndex: 11",
     "cellStyle":"position: sticky,left: 60,backgroundColor: #fff,padding: 0",
     "Search":true,
     "Editable":null,
     "ScrnDisplay":true,
     "Type":"TEXT",
     "Active":true,
     "ColumnOrder":2,
     "Options":null
  },
  {
     "MappingColumnName":"Segment",
     "DisplayName":"Segment",
     "Filtering":"false",
     "headerStyle":"position:sticky,left: 240,zIndex: 11",
     "cellStyle":"position: sticky,left: 240,backgroundColor: #fff,padding: 0",
     "Search":true,
     "Editable":null,
     "ScrnDisplay":true,
     "Type":"TEXT",
     "Active":true,
     "ColumnOrder":3,
     "Options":null
  },
  {
     "MappingColumnName":"SourceAccountingCombination",
     "DisplayName":"Source Accounting Combination",
     "Filtering":"false",
     "headerStyle":null,
     "cellStyle":"padding: 0",
     "Search":true,
     "Editable":null,
     "ScrnDisplay":true,
     "Type":"TEXT",
     "Active":true,
     "ColumnOrder":4,
     "Options":null
  },
  {
     "MappingColumnName":"CompanyID",
     "DisplayName":"Company",
     "Filtering":"false",
     "headerStyle":null,
     "cellStyle":"padding: 0",
     "Search":true,
     "Editable":null,
     "ScrnDisplay":true,
     "Type":"LOV",
     "Active":true,
     "ColumnOrder":5,
     "Options":[
        {
           "ID":1,
           "DisplayName":"ETB",
           "InternalValue":"ETBCompany",
           "Active":true
        },
        {
           "ID":2,
           "DisplayName":"ETCM",
           "InternalValue":"ETCM",
           "Active":true
        },
        {
           "ID":3,
           "DisplayName":"ETFC",
           "InternalValue":"ETFCCompany",
           "Active":true
        },
        {
           "ID":4,
           "DisplayName":"ETFCS",
           "InternalValue":"ETFCSComapny",
           "Active":true
        },
        {
           "ID":5,
           "DisplayName":"ETIS",
           "InternalValue":"ETIS",
           "Active":true
        },
        {
           "ID":6,
           "DisplayName":"ETS",
           "InternalValue":"ETSCompany",
           "Active":true
        },
        {
           "ID":7,
           "DisplayName":"ETSB",
           "InternalValue":"ETSBCompany",
           "Active":true
        }
     ]
  },
  {
     "MappingColumnName":"AccountID",
     "DisplayName":"Account",
     "Filtering":"false",
     "headerStyle":null,
     "cellStyle":"padding: 0",
     "Search":true,
     "Editable":null,
     "ScrnDisplay":true,
     "Type":"LOV",
     "Active":true,
     "ColumnOrder":6,
     "Options":[
        {
           "ID":8,
           "DisplayName":"27977854940",
           "InternalValue":"27977854940",
           "Active":true
        }
     ]
  },
  {
     "MappingColumnName":"IBNIBearingID",
     "DisplayName":"IB/NI Bearing",
     "Filtering":"false",
     "headerStyle":null,
     "cellStyle":"padding: 0",
     "Search":true,
     "Editable":null,
     "ScrnDisplay":true,
     "Type":"LOV",
     "Active":true,
     "ColumnOrder":7,
     "Options":null
  },
  {
     "MappingColumnName":"ProductID",
     "DisplayName":"Product",
     "Filtering":"false",
     "headerStyle":null,
     "cellStyle":"padding: 0",
     "Search":true,
     "Editable":null,
     "ScrnDisplay":true,
     "Type":"LOV",
     "Active":true,
     "ColumnOrder":8,
     "Options":[
        {
           "ID":11,
           "DisplayName":"1.5_Year",
           "InternalValue":"1.5_Year",
           "Active":true
        },
        {
           "ID":12,
           "DisplayName":"1_Year",
           "InternalValue":"1_Year",
           "Active":true
        },
        {
           "ID":13,
           "DisplayName":"10_Year",
           "InternalValue":"10_Year",
           "Active":true
        },
        {
           "ID":14,
           "DisplayName":"15_Month",
           "InternalValue":"15_Month",
           "Active":true
        },
        {
           "ID":15,
           "DisplayName":"2.5_Year",
           "InternalValue":"2.5_Year",
           "Active":true
        },
        {
           "ID":16,
           "DisplayName":"2_Year",
           "InternalValue":"2_Year",
           "Active":true
        },
        {
           "ID":17,
           "DisplayName":"3_Month",
           "InternalValue":"3_Month",
           "Active":true
        },
        {
           "ID":18,
           "DisplayName":"3_Year",
           "InternalValue":"3_Year",
           "Active":true
        },
        {
           "ID":19,
           "DisplayName":"4_Year",
           "InternalValue":"4_Year",
           "Active":true
        },
        {
           "ID":20,
           "DisplayName":"5_Year",
           "InternalValue":"5_Year",
           "Active":true
        },
        {
           "ID":21,
           "DisplayName":"6_Month",
           "InternalValue":"6_Month",
           "Active":true
        },
        {
           "ID":22,
           "DisplayName":"7_Year",
           "InternalValue":"7_Year",
           "Active":true
        },
        {
           "ID":23,
           "DisplayName":"ASDA",
           "InternalValue":"ASDA",
           "Active":true
        },
        {
           "ID":24,
           "DisplayName":"ATM",
           "InternalValue":"ATM",
           "Active":true
        },
        {
           "ID":25,
           "DisplayName":"ATM Clearing",
           "InternalValue":"ATM Clearing",
           "Active":true
        },
        {
           "ID":26,
           "DisplayName":"ATM Clearing - WP",
           "InternalValue":"ATM Clearing - WP",
           "Active":true
        },
        {
           "ID":27,
           "DisplayName":"BLANK",
           "InternalValue":"BLANKProduct",
           "Active":true
        },
        {
           "ID":28,
           "DisplayName":"Bonds",
           "InternalValue":"Bonds",
           "Active":true
        },
        {
           "ID":29,
           "DisplayName":"BONY - FX Drafts",
           "InternalValue":"BONY - FX Drafts",
           "Active":true
        },
        {
           "ID":30,
           "DisplayName":"Brokerage Margin",
           "InternalValue":"Brokerage Margin",
           "Active":true
        },
        {
           "ID":31,
           "DisplayName":"Brokerage Ops",
           "InternalValue":"Brokerage Ops",
           "Active":true
        },
        {
           "ID":32,
           "DisplayName":"Business Checking",
           "InternalValue":"Business Checking",
           "Active":true
        },
        {
           "ID":33,
           "DisplayName":"CD_Early_Withdrawal_Penalty",
           "InternalValue":"CD_Early_Withdrawal_Penalty",
           "Active":true
        },
        {
           "ID":34,
           "DisplayName":"Clearing House Deposits",
           "InternalValue":"Clearing House Deposits",
           "Active":true
        },
        {
           "ID":35,
           "DisplayName":"Commerical",
           "InternalValue":"Commerical",
           "Active":true
        },
        {
           "ID":36,
           "DisplayName":"Complete Savings",
           "InternalValue":"Complete Savings",
           "Active":true
        },
        {
           "ID":37,
           "DisplayName":"Controlled Disbursement Checkwriting",
           "InternalValue":"Controlled Disbursement Checkwriting",
           "Active":true
        },
        {
           "ID":38,
           "DisplayName":"CSA - High Yield",
           "InternalValue":"CSA - High Yield",
           "Active":true
        },
        {
           "ID":39,
           "DisplayName":"Customer Bill Pay",
           "InternalValue":"Customer Bill Pay",
           "Active":true
        },
        {
           "ID":40,
           "DisplayName":"Customer Service",
           "InternalValue":"Customer Service Product",
           "Active":true
        },
        {
           "ID":41,
           "DisplayName":"DDM ETB DDA",
           "InternalValue":"DDM ETB DDA",
           "Active":true
        },
        {
           "ID":42,
           "DisplayName":"DDM ETSB DDA",
           "InternalValue":"DDM ETSB DDA",
           "Active":true
        },
        {
           "ID":43,
           "DisplayName":"Deposit Ops Research Checks",
           "InternalValue":"Deposit Ops Research Checks",
           "Active":true
        },
        {
           "ID":44,
           "DisplayName":"E*TRADE Checking",
           "InternalValue":"E*TRADE Checking",
           "Active":true
        },
        {
           "ID":45,
           "DisplayName":"E*TRADE Money Market",
           "InternalValue":"E*TRADE Money Market",
           "Active":true
        },
        {
           "ID":46,
           "DisplayName":"Escheatment",
           "InternalValue":"Escheatment",
           "Active":true
        },
        {
           "ID":47,
           "DisplayName":"ESDA",
           "InternalValue":"ESDA",
           "Active":true
        },
        {
           "ID":48,
           "DisplayName":"ESDA DDA - Checking",
           "InternalValue":"ESDA DDA - Checking",
           "Active":true
        },
        {
           "ID":49,
           "DisplayName":"ETB MMDA",
           "InternalValue":"ETB MMDA",
           "Active":true
        },
        {
           "ID":50,
           "DisplayName":"ETS IPO Error",
           "InternalValue":"ETS IPO Error",
           "Active":true
        },
        {
           "ID":51,
           "DisplayName":"ETS Outage & Vendor Error",
           "InternalValue":"ETS Outage & Vendor Error",
           "Active":true
        },
        {
           "ID":52,
           "DisplayName":"ETS Trade Error",
           "InternalValue":"ETS Trade Error",
           "Active":true
        },
        {
           "ID":53,
           "DisplayName":"ETSB DDA",
           "InternalValue":"ETSB DDA",
           "Active":true
        },
        {
           "ID":54,
           "DisplayName":"ETSB MMDA",
           "InternalValue":"ETSB MMDA",
           "Active":true
        },
        {
           "ID":55,
           "DisplayName":"FEBO",
           "InternalValue":"FEBO",
           "Active":true
        },
        {
           "ID":56,
           "DisplayName":"Fed Funds",
           "InternalValue":"Fed Funds",
           "Active":true
        },
        {
           "ID":57,
           "DisplayName":"FHLB_Stock",
           "InternalValue":"FHLB_Stock",
           "Active":true
        },
        {
           "ID":58,
           "DisplayName":"FHLMC",
           "InternalValue":"FHLMC",
           "Active":true
        },
        {
           "ID":59,
           "DisplayName":"First_Mortgage",
           "InternalValue":"First_Mortgage",
           "Active":true
        },
        {
           "ID":60,
           "DisplayName":"FNMA",
           "InternalValue":"FNMA",
           "Active":true
        },
        {
           "ID":61,
           "DisplayName":"Free Credits",
           "InternalValue":"Free Credits",
           "Active":true
        },
        {
           "ID":62,
           "DisplayName":"GNMA",
           "InternalValue":"GNMA",
           "Active":true
        },
        {
           "ID":63,
           "DisplayName":"HELOC",
           "InternalValue":"HELOC",
           "Active":true
        },
        {
           "ID":64,
           "DisplayName":"Independent Checking",
           "InternalValue":"Independent Checking",
           "Active":true
        },
        {
           "ID":65,
           "DisplayName":"Interest Checks",
           "InternalValue":"Interest Checks",
           "Active":true
        },
        {
           "ID":66,
           "DisplayName":"Interest_Rate_Swap",
           "InternalValue":"Interest_Rate_Swap",
           "Active":true
        },
        {
           "ID":67,
           "DisplayName":"Inventory Errors",
           "InternalValue":"Inventory Errors Product",
           "Active":true
        },
        {
           "ID":68,
           "DisplayName":"ISDA",
           "InternalValue":"ISDA",
           "Active":true
        },
        {
           "ID":69,
           "DisplayName":"ISDA Deposit Liability GL - Checking",
           "InternalValue":"ISDA Deposit Liability GL - Checking",
           "Active":true
        },
        {
           "ID":70,
           "DisplayName":"ISDA MMDA",
           "InternalValue":"ISDA MMDA",
           "Active":true
        },
        {
           "ID":71,
           "DisplayName":"LBX Fleet EC Pending",
           "InternalValue":"LBX Fleet EC Pending",
           "Active":true
        },
        {
           "ID":72,
           "DisplayName":"LBX REGULUS EC Pending",
           "InternalValue":"LBX REGULUS EC Pending",
           "Active":true
        },
        {
           "ID":73,
           "DisplayName":"LBX State Street EC Pending",
           "InternalValue":"LBX State Street EC Pending",
           "Active":true
        },
        {
           "ID":74,
           "DisplayName":"LBX Wells Holding",
           "InternalValue":"LBX Wells Holding",
           "Active":true
        },
        {
           "ID":75,
           "DisplayName":"Line of Credit",
           "InternalValue":"Line of Credit",
           "Active":true
        },
        {
           "ID":76,
           "DisplayName":"Line of Credit (LOC) - Committed",
           "InternalValue":"Line of Credit (LOC) - Committed",
           "Active":true
        },
        {
           "ID":77,
           "DisplayName":"Line of Credit (LOC) - Uncommitted",
           "InternalValue":"Line of Credit (LOC) - Uncommitted",
           "Active":true
        },
        {
           "ID":78,
           "DisplayName":"LOC External (Counterparty)",
           "InternalValue":"LOC External (Counterparty)",
           "Active":true
        },
        {
           "ID":79,
           "DisplayName":"Margin",
           "InternalValue":"Margin",
           "Active":true
        },
        {
           "ID":80,
           "DisplayName":"Max-Rate Checking",
           "InternalValue":"Max-Rate Checking",
           "Active":true
        },
        {
           "ID":81,
           "DisplayName":"Money Market",
           "InternalValue":"Money Market",
           "Active":true
        },
        {
           "ID":82,
           "DisplayName":"Money Market Fund",
           "InternalValue":"Money Market Fund",
           "Active":true
        },
        {
           "ID":83,
           "DisplayName":"Money Market Savings",
           "InternalValue":"Money Market Savings",
           "Active":true
        },
        {
           "ID":84,
           "DisplayName":"Mutual Fund",
           "InternalValue":"Mutual Fund Product",
           "Active":true
        },
        {
           "ID":85,
           "DisplayName":"Official Checks",
           "InternalValue":"Official Checks",
           "Active":true
        },
        {
           "ID":86,
           "DisplayName":"Option",
           "InternalValue":"Option",
           "Active":true
        },
        {
           "ID":87,
           "DisplayName":"Options?",
           "InternalValue":"Options?",
           "Active":true
        },
        {
           "ID":88,
           "DisplayName":"Premium Savings",
           "InternalValue":"Premium Savings",
           "Active":true
        },
        {
           "ID":89,
           "DisplayName":"Premium Savings Sweep",
           "InternalValue":"Premium Savings Sweep",
           "Active":true
        },
        {
           "ID":90,
           "DisplayName":"PSA",
           "InternalValue":"PSA",
           "Active":true
        },
        {
           "ID":91,
           "DisplayName":"Reg_U",
           "InternalValue":"Reg_U",
           "Active":true
        },
        {
           "ID":92,
           "DisplayName":"Reg_U-TCA",
           "InternalValue":"Reg_U-TCA",
           "Active":true
        },
        {
           "ID":93,
           "DisplayName":"Regular Checking",
           "InternalValue":"Regular Checking",
           "Active":true
        },
        {
           "ID":94,
           "DisplayName":"Regular_Checking",
           "InternalValue":"Regular_Checking",
           "Active":true
        },
        {
           "ID":95,
           "DisplayName":"REPO ETS-ETB 15c-3",
           "InternalValue":"REPO ETS-ETB 15c-3",
           "Active":true
        },
        {
           "ID":96,
           "DisplayName":"REPO ETS-ETB Firm",
           "InternalValue":"REPO ETS-ETB Firm",
           "Active":true
        },
        {
           "ID":97,
           "DisplayName":"RSDA",
           "InternalValue":"RSDA",
           "Active":true
        },
        {
           "ID":98,
           "DisplayName":"RSDA ETB DDA ",
           "InternalValue":"RSDA ETB DDA ",
           "Active":true
        },
        {
           "ID":99,
           "DisplayName":"RSDA ETB MMDA ",
           "InternalValue":"RSDA ETB MMDA ",
           "Active":true
        },
        {
           "ID":100,
           "DisplayName":"SDA",
           "InternalValue":"SDA",
           "Active":true
        },
        {
           "ID":101,
           "DisplayName":"SDA ETB DDA",
           "InternalValue":"SDA ETB DDA",
           "Active":true
        },
        {
           "ID":102,
           "DisplayName":"SDA ETB MMDA",
           "InternalValue":"SDA ETB MMDA",
           "Active":true
        },
        {
           "ID":103,
           "DisplayName":"SDA ETSB DDA",
           "InternalValue":"SDA ETSB DDA",
           "Active":true
        },
        {
           "ID":104,
           "DisplayName":"SDA ETSB MMDA",
           "InternalValue":"SDA ETSB MMDA",
           "Active":true
        },
        {
           "ID":105,
           "DisplayName":"Second Mortgage",
           "InternalValue":"Second Mortgage",
           "Active":true
        },
        {
           "ID":106,
           "DisplayName":"Second_Mortgage",
           "InternalValue":"Second_Mortgage",
           "Active":true
        },
        {
           "ID":107,
           "DisplayName":"Securities Lending",
           "InternalValue":"Securities Lending",
           "Active":true
        },
        {
           "ID":108,
           "DisplayName":"Stale Dated Checks",
           "InternalValue":"Stale Dated Checks",
           "Active":true
        },
        {
           "ID":109,
           "DisplayName":"Stock - Institutional",
           "InternalValue":"Stock - Institutional",
           "Active":true
        },
        {
           "ID":110,
           "DisplayName":"Sweep MMDA",
           "InternalValue":"Sweep MMDA",
           "Active":true
        },
        {
           "ID":111,
           "DisplayName":"Teller Checks",
           "InternalValue":"Teller Checks",
           "Active":true
        },
        {
           "ID":112,
           "DisplayName":"Treasury Bond",
           "InternalValue":"Treasury Bond",
           "Active":true
        },
        {
           "ID":113,
           "DisplayName":"Undistributed Late Day Wires",
           "InternalValue":"Undistributed Late Day Wires",
           "Active":true
        },
        {
           "ID":114,
           "DisplayName":"Undistributed_Deposits",
           "InternalValue":"Undistributed_Deposits",
           "Active":true
        },
        {
           "ID":115,
           "DisplayName":"Wells Deposit Returns",
           "InternalValue":"Wells Deposit Returns",
           "Active":true
        },
        {
           "ID":116,
           "DisplayName":"WP Debit Card Settlement",
           "InternalValue":"WP Debit Card Settlement",
           "Active":true
        }
     ]
  },
  {
     "MappingColumnName":"SubProductID",
     "DisplayName":"SubProduct",
     "Filtering":"false",
     "headerStyle":null,
     "cellStyle":"padding: 0",
     "Search":true,
     "Editable":null,
     "ScrnDisplay":true,
     "Type":"LOV",
     "Active":true,
     "ColumnOrder":9,
     "Options":[
        {
           "ID":117,
           "DisplayName":"AmSouth - Purchased",
           "InternalValue":"AmSouth - Purchased",
           "Active":true
        },
        {
           "ID":118,
           "DisplayName":"BLANK",
           "InternalValue":"BLANKSubProduct",
           "Active":true
        },
        {
           "ID":119,
           "DisplayName":"Countrywide",
           "InternalValue":"Countrywide",
           "Active":true
        },
        {
           "ID":120,
           "DisplayName":"E*Loan Flow",
           "InternalValue":"E*Loan Flow",
           "Active":true
        },
        {
           "ID":121,
           "DisplayName":"First Horizon",
           "InternalValue":"First Horizon",
           "Active":true
        },
        {
           "ID":122,
           "DisplayName":"Freemont HELOCs",
           "InternalValue":"Freemont HELOCs",
           "Active":true
        },
        {
           "ID":123,
           "DisplayName":"GMAC",
           "InternalValue":"GMAC",
           "Active":true
        },
        {
           "ID":124,
           "DisplayName":"GreenPoint Mortgage",
           "InternalValue":"GreenPoint Mortgage",
           "Active":true
        },
        {
           "ID":125,
           "DisplayName":"Loan Portfolio Purchased",
           "InternalValue":"Loan Portfolio Purchased",
           "Active":true
        },
        {
           "ID":126,
           "DisplayName":"Macquarie Mortgages USA",
           "InternalValue":"Macquarie Mortgages USA",
           "Active":true
        },
        {
           "ID":127,
           "DisplayName":"Morgan Stanley Heloc",
           "InternalValue":"Morgan Stanley Heloc",
           "Active":true
        },
        {
           "ID":128,
           "DisplayName":"National City Bank",
           "InternalValue":"National City Bank",
           "Active":true
        },
        {
           "ID":129,
           "DisplayName":"National City Mtge Co.",
           "InternalValue":"National City Mtge Co.",
           "Active":true
        },
        {
           "ID":130,
           "DisplayName":"NY Community Bank",
           "InternalValue":"NY Community Bank",
           "Active":true
        },
        {
           "ID":131,
           "DisplayName":"PNC HELOC/HEIL",
           "InternalValue":"PNC HELOC/HEIL",
           "Active":true
        },
        {
           "ID":132,
           "DisplayName":"Quicken",
           "InternalValue":"Quicken",
           "Active":true
        },
        {
           "ID":133,
           "DisplayName":"SLS",
           "InternalValue":"SLS",
           "Active":true
        },
        {
           "ID":134,
           "DisplayName":"Sovereign Bank",
           "InternalValue":"Sovereign Bank",
           "Active":true
        },
        {
           "ID":135,
           "DisplayName":"SuperNova",
           "InternalValue":"SuperNova",
           "Active":true
        },
        {
           "ID":136,
           "DisplayName":"SuperNova-TCA",
           "InternalValue":"SuperNova-TCA",
           "Active":true
        },
        {
           "ID":137,
           "DisplayName":"USAA",
           "InternalValue":"USAA",
           "Active":true
        },
        {
           "ID":138,
           "DisplayName":"Wachovia",
           "InternalValue":"Wachovia",
           "Active":true
        },
        {
           "ID":139,
           "DisplayName":"Wells Fargo HE",
           "InternalValue":"Wells Fargo HE",
           "Active":true
        },
        {
           "ID":140,
           "DisplayName":"Wholesale Seconds",
           "InternalValue":"Wholesale Seconds",
           "Active":true
        }
     ]
  },
  {
     "MappingColumnName":"RevenueCategoryID",
     "DisplayName":"Revenue Category",
     "Filtering":"false",
     "headerStyle":null,
     "cellStyle":"padding: 0",
     "Search":true,
     "Editable":null,
     "ScrnDisplay":true,
     "Type":"LOV",
     "Active":true,
     "ColumnOrder":10,
     "Options":[
        {
           "ID":141,
           "DisplayName":"Account Maintenance Fees",
           "InternalValue":"Account Maintenance Fees",
           "Active":true
        },
        {
           "ID":142,
           "DisplayName":"Advisor Services Management Fees",
           "InternalValue":"Advisor Services Management Fees",
           "Active":true
        },
        {
           "ID":143,
           "DisplayName":"Amortization - HFI ARM Prem/Disc",
           "InternalValue":"Amortization - HFI ARM Prem/Disc",
           "Active":true
        },
        {
           "ID":144,
           "DisplayName":"Amortization - HFI Fixed Prem/Disc                                          ",
           "InternalValue":"Amortization - HFI Fixed Prem/Disc                                          ",
           "Active":true
        },
        {
           "ID":145,
           "DisplayName":"BLANK",
           "InternalValue":"BLANKRevenueCategory",
           "Active":true
        },
        {
           "ID":146,
           "DisplayName":"Bond Commissions",
           "InternalValue":"Bond Commissions",
           "Active":true
        },
        {
           "ID":147,
           "DisplayName":"Broker Assist Fee",
           "InternalValue":"Broker Assist Fee",
           "Active":true
        },
        {
           "ID":148,
           "DisplayName":"Broker Service Fees",
           "InternalValue":"Broker Service Fees",
           "Active":true
        },
        {
           "ID":149,
           "DisplayName":"Brokerage Commissions",
           "InternalValue":"Brokerage Commissions",
           "Active":true
        },
        {
           "ID":150,
           "DisplayName":"Cashiers check Fees",
           "InternalValue":"Cashiers check Fees",
           "Active":true
        },
        {
           "ID":151,
           "DisplayName":"CD Research Service Fees",
           "InternalValue":"CD Research Service Fees",
           "Active":true
        },
        {
           "ID":152,
           "DisplayName":"CD Wire Fees",
           "InternalValue":"CD Wire Fees",
           "Active":true
        },
        {
           "ID":153,
           "DisplayName":"Check Return Fee",
           "InternalValue":"Check Return Fee",
           "Active":true
        },
        {
           "ID":154,
           "DisplayName":"Checkbook Reorder Fee",
           "InternalValue":"Checkbook Reorder Fee",
           "Active":true
        },
        {
           "ID":155,
           "DisplayName":"Commission Rebates",
           "InternalValue":"Commission Rebates",
           "Active":true
        },
        {
           "ID":156,
           "DisplayName":"Customer Accommodations",
           "InternalValue":"Customer Accommodations",
           "Active":true
        },
        {
           "ID":157,
           "DisplayName":"Customer Asset Fees - ESDA Sweep (off balance sheet)",
           "InternalValue":"Customer Asset Fees - ESDA Sweep (off balance sheet)",
           "Active":true
        },
        {
           "ID":158,
           "DisplayName":"Early Withdrawal Penalty Fee - CD",
           "InternalValue":"Early Withdrawal Penalty Fee - CD",
           "Active":true
        },
        {
           "ID":159,
           "DisplayName":"ET US Omnibus (A)",
           "InternalValue":"ET US Omnibus (A)",
           "Active":true
        },
        {
           "ID":160,
           "DisplayName":"ET US Omnibus (B)",
           "InternalValue":"ET US Omnibus (B)",
           "Active":true
        },
        {
           "ID":161,
           "DisplayName":"Fed EX/IRA/Early Closeout",
           "InternalValue":"Fed EX/IRA/Early Closeout",
           "Active":true
        },
        {
           "ID":162,
           "DisplayName":"Free Trade Promotion Credits",
           "InternalValue":"Free Trade Promotion Credits",
           "Active":true
        },
        {
           "ID":163,
           "DisplayName":"FX",
           "InternalValue":"FX",
           "Active":true
        },
        {
           "ID":164,
           "DisplayName":"Gain/Loss on HFS Loans",
           "InternalValue":"Gain/Loss on HFS Loans",
           "Active":true
        },
        {
           "ID":165,
           "DisplayName":"Gain/Loss on sale of Loans",
           "InternalValue":"Gain/Loss on sale of Loans",
           "Active":true
        },
        {
           "ID":166,
           "DisplayName":"Gain/Loss on sale of Trading Securities",
           "InternalValue":"Gain/Loss on sale of Trading Securities",
           "Active":true
        },
        {
           "ID":167,
           "DisplayName":"Gain/Loss Trading Derivatives",
           "InternalValue":"Gain/Loss Trading Derivatives",
           "Active":true
        },
        {
           "ID":168,
           "DisplayName":"Handling Fees",
           "InternalValue":"Handling Fees",
           "Active":true
        },
        {
           "ID":169,
           "DisplayName":"Hedge Expense",
           "InternalValue":"Hedge Expense",
           "Active":true
        },
        {
           "ID":170,
           "DisplayName":"Index Option Fees",
           "InternalValue":"Index Option Fees",
           "Active":true
        },
        {
           "ID":171,
           "DisplayName":"Interchange Revenue",
           "InternalValue":"Interchange Revenue",
           "Active":true
        },
        {
           "ID":172,
           "DisplayName":"Interchange Revenue - Processing Costs",
           "InternalValue":"Interchange Revenue - Processing Costs",
           "Active":true
        },
        {
           "ID":173,
           "DisplayName":"Interest Expense  - External LOC",
           "InternalValue":"Interest Expense  - External LOC",
           "Active":true
        },
        {
           "ID":174,
           "DisplayName":"Interest Expense - CD Fixed Rate",
           "InternalValue":"Interest Expense - CD Fixed Rate",
           "Active":true
        },
        {
           "ID":175,
           "DisplayName":"Interest Expense - CD Variable Rate",
           "InternalValue":"Interest Expense - CD Variable Rate",
           "Active":true
        },
        {
           "ID":176,
           "DisplayName":"Interest Expense - Complete Savings",
           "InternalValue":"Interest Expense - Complete Savings",
           "Active":true
        },
        {
           "ID":177,
           "DisplayName":"Interest Expense - CSA High Yield",
           "InternalValue":"Interest Expense - CSA High Yield",
           "Active":true
        },
        {
           "ID":178,
           "DisplayName":"Interest Expense - ESDA Sweep",
           "InternalValue":"Interest Expense - ESDA Sweep",
           "Active":true
        },
        {
           "ID":179,
           "DisplayName":"Interest Expense - ETB In-house ",
           "InternalValue":"Interest Expense - ETB In-house ",
           "Active":true
        },
        {
           "ID":180,
           "DisplayName":"Interest Expense - ETRADE Checking Account",
           "InternalValue":"Interest Expense - ETRADE Checking Account",
           "Active":true
        },
        {
           "ID":181,
           "DisplayName":"Interest Expense - ETRADE Money Market",
           "InternalValue":"Interest Expense - ETRADE Money Market",
           "Active":true
        },
        {
           "ID":182,
           "DisplayName":"Interest Expense - Free Credit",
           "InternalValue":"Interest Expense - Free Credit",
           "Active":true
        },
        {
           "ID":183,
           "DisplayName":"Interest Expense - Fully Paid Lending",
           "InternalValue":"Interest Expense - Fully Paid Lending",
           "Active":true
        },
        {
           "ID":184,
           "DisplayName":"Interest Expense - Independent Checking Account",
           "InternalValue":"Interest Expense - Independent Checking Account",
           "Active":true
        },
        {
           "ID":185,
           "DisplayName":"Interest Expense - LOC - ICO",
           "InternalValue":"Interest Expense - LOC - ICO",
           "Active":true
        },
        {
           "ID":186,
           "DisplayName":"Interest Expense - Max Rate Checking",
           "InternalValue":"Interest Expense - Max Rate Checking",
           "Active":true
        },
        {
           "ID":187,
           "DisplayName":"Interest Expense - Money Market Checking",
           "InternalValue":"Interest Expense - Money Market Checking",
           "Active":true
        },
        {
           "ID":188,
           "DisplayName":"Interest Expense - Premium Savings",
           "InternalValue":"Interest Expense - Premium Savings",
           "Active":true
        },
        {
           "ID":189,
           "DisplayName":"Interest Expense - REPO",
           "InternalValue":"Interest Expense - REPO",
           "Active":true
        },
        {
           "ID":190,
           "DisplayName":"Interest Expense - Stock Borrow",
           "InternalValue":"Interest Expense - Stock Borrow",
           "Active":true
        },
        {
           "ID":191,
           "DisplayName":"Interest Income  - HFS Fixed                                                    ",
           "InternalValue":"Interest Income  - HFS Fixed                                                    ",
           "Active":true
        },
        {
           "ID":192,
           "DisplayName":"Interest Income - Cash",
           "InternalValue":"Interest Income - Cash",
           "Active":true
        },
        {
           "ID":193,
           "DisplayName":"Interest Income - Fed Funds Sold",
           "InternalValue":"Interest Income - Fed Funds Sold",
           "Active":true
        },
        {
           "ID":194,
           "DisplayName":"Interest Income - HFI ARM",
           "InternalValue":"Interest Income - HFI ARM",
           "Active":true
        },
        {
           "ID":195,
           "DisplayName":"Interest Income - HFI Fixed",
           "InternalValue":"Interest Income - HFI Fixed",
           "Active":true
        },
        {
           "ID":196,
           "DisplayName":"Interest Income - HFI Prepayment Penalties",
           "InternalValue":"Interest Income - HFI Prepayment Penalties",
           "Active":true
        },
        {
           "ID":197,
           "DisplayName":"Interest Income - HFS ARM                                                      ",
           "InternalValue":"Interest Income - HFS ARM                                                      ",
           "Active":true
        },
        {
           "ID":198,
           "DisplayName":"Interest Income - Margin",
           "InternalValue":"Interest Income - Margin",
           "Active":true
        },
        {
           "ID":199,
           "DisplayName":"Interest Income - Operational",
           "InternalValue":"Interest Income - Operational",
           "Active":true
        },
        {
           "ID":200,
           "DisplayName":"Interest Income - Other",
           "InternalValue":"Interest Income - Other",
           "Active":true
        },
        {
           "ID":201,
           "DisplayName":"Interest Income - Reverse Repo (15c3) - ICO                                    ",
           "InternalValue":"Interest Income - Reverse Repo (15c3) - ICO                                    ",
           "Active":true
        },
        {
           "ID":202,
           "DisplayName":"Interest Income - Reverse Repo (Firm) - ICO                                    ",
           "InternalValue":"Interest Income - Reverse Repo (Firm) - ICO                                    ",
           "Active":true
        },
        {
           "ID":203,
           "DisplayName":"Interest Income - SB Conduit                                                   ",
           "InternalValue":"Interest Income - SB Conduit                                                   ",
           "Active":true
        },
        {
           "ID":204,
           "DisplayName":"Interest Income - Segregated Cash",
           "InternalValue":"Interest Income - Segregated Cash",
           "Active":true
        },
        {
           "ID":205,
           "DisplayName":"Interest Income - Stock Loan                                            ",
           "InternalValue":"Interest Income - Stock Loan                                            ",
           "Active":true
        },
        {
           "ID":206,
           "DisplayName":"Interest Income - Stock Loan Fully Paid                                 ",
           "InternalValue":"Interest Income - Stock Loan Fully Paid                                 ",
           "Active":true
        },
        {
           "ID":207,
           "DisplayName":"Interest Income - Stock Loan Hard to Borrow Short Sale                  ",
           "InternalValue":"Interest Income - Stock Loan Hard to Borrow Short Sale                  ",
           "Active":true
        },
        {
           "ID":208,
           "DisplayName":"Interest Income - Treasury Bond",
           "InternalValue":"Interest Income - Treasury Bond",
           "Active":true
        },
        {
           "ID":209,
           "DisplayName":"Internal MMS Account                                                    ",
           "InternalValue":"Internal MMS Account                                                    ",
           "Active":true
        },
        {
           "ID":210,
           "DisplayName":"IRA/KEOGH Fees",
           "InternalValue":"IRA/KEOGH Fees",
           "Active":true
        },
        {
           "ID":211,
           "DisplayName":"Margin Liquidation Fees",
           "InternalValue":"Margin Liquidation Fees",
           "Active":true
        },
        {
           "ID":212,
           "DisplayName":"Minimum Avg Bal/Coverdraft",
           "InternalValue":"Minimum Avg Bal/Coverdraft",
           "Active":true
        },
        {
           "ID":213,
           "DisplayName":"Mutual Fund 12b-1Fees",
           "InternalValue":"Mutual Fund 12b-1Fees",
           "Active":true
        },
        {
           "ID":214,
           "DisplayName":"Mutual Fund Commissions",
           "InternalValue":"Mutual Fund Commissions",
           "Active":true
        },
        {
           "ID":215,
           "DisplayName":"Mutual Fund Termination Fees",
           "InternalValue":"Mutual Fund Termination Fees",
           "Active":true
        },
        {
           "ID":216,
           "DisplayName":"Mutual Funds 12b-1",
           "InternalValue":"Mutual Funds 12b-1",
           "Active":true
        },
        {
           "ID":217,
           "DisplayName":"Mutual Funds 12b-1 - Schwab Pass Through ",
           "InternalValue":"Mutual Funds 12b-1 - Schwab Pass Through ",
           "Active":true
        },
        {
           "ID":218,
           "DisplayName":"Mutual Funds ABMF - Schwab Pass Through",
           "InternalValue":"Mutual Funds ABMF - Schwab Pass Through",
           "Active":true
        },
        {
           "ID":219,
           "DisplayName":"Mutual Funds NTF - Schwab Pass Through",
           "InternalValue":"Mutual Funds NTF - Schwab Pass Through",
           "Active":true
        },
        {
           "ID":220,
           "DisplayName":"Mutual Funds Per Position - Schwab Pass Through ",
           "InternalValue":"Mutual Funds Per Position - Schwab Pass Through ",
           "Active":true
        },
        {
           "ID":221,
           "DisplayName":"NSF Fees (ACH & Check)",
           "InternalValue":"NSF Fees (ACH & Check)",
           "Active":true
        },
        {
           "ID":222,
           "DisplayName":"Option Commissions",
           "InternalValue":"Option Commissions",
           "Active":true
        },
        {
           "ID":223,
           "DisplayName":"Other Fees",
           "InternalValue":"Other Fees",
           "Active":true
        },
        {
           "ID":224,
           "DisplayName":"Outgoing ACATS",
           "InternalValue":"Outgoing ACATS",
           "Active":true
        },
        {
           "ID":225,
           "DisplayName":"Overnight Mail Fees",
           "InternalValue":"Overnight Mail Fees",
           "Active":true
        },
        {
           "ID":226,
           "DisplayName":"PET Subscription Fees",
           "InternalValue":"PET Subscription Fees",
           "Active":true
        },
        {
           "ID":227,
           "DisplayName":"Real Time Quotes",
           "InternalValue":"Real Time Quotes",
           "Active":true
        },
        {
           "ID":228,
           "DisplayName":"Reorganization Fees",
           "InternalValue":"Reorganization Fees",
           "Active":true
        },
        {
           "ID":229,
           "DisplayName":"Returned Check Fees",
           "InternalValue":"Returned Check Fees",
           "Active":true
        },
        {
           "ID":230,
           "DisplayName":"Statement & Application Fees",
           "InternalValue":"Statement & Application Fees",
           "Active":true
        },
        {
           "ID":231,
           "DisplayName":"Stock Commissions",
           "InternalValue":"Stock Commissions",
           "Active":true
        },
        {
           "ID":232,
           "DisplayName":"Stop Payment Fees",
           "InternalValue":"Stop Payment Fees",
           "Active":true
        },
        {
           "ID":233,
           "DisplayName":"Wire Fees",
           "InternalValue":"Wire Fees",
           "Active":true
        },
        {
           "ID":234,
           "DisplayName":"Wired Funds Fees",
           "InternalValue":"Wired Funds Fees",
           "Active":true
        },
        {
           "ID":235,
           "DisplayName":"WP GMBS",
           "InternalValue":"WP GMBS",
           "Active":true
        },
        {
           "ID":236,
           "DisplayName":"WP International Service Assessment Fees",
           "InternalValue":"WP International Service Assessment Fees",
           "Active":true
        },
        {
           "ID":237,
           "DisplayName":"WP_Interchange/Standard_Fees",
           "InternalValue":"WP_Interchange/Standard_Fees",
           "Active":true
        }
     ]
  },
  {
     "MappingColumnName":"SpendCategoryID",
     "DisplayName":"SpendCategory",
     "Filtering":"false",
     "headerStyle":null,
     "cellStyle":"padding: 0",
     "Search":true,
     "Editable":null,
     "ScrnDisplay":true,
     "Type":"LOV",
     "Active":true,
     "ColumnOrder":11,
     "Options":[
        {
           "ID":238,
           "DisplayName":"401(K) EE Portion",
           "InternalValue":"401(K) EE Portion",
           "Active":true
        },
        {
           "ID":239,
           "DisplayName":"Accrued 125 Benefit Plan",
           "InternalValue":"Accrued 125 Benefit Plan",
           "Active":true
        },
        {
           "ID":240,
           "DisplayName":"Accrued HSA",
           "InternalValue":"Accrued HSA",
           "Active":true
        },
        {
           "ID":241,
           "DisplayName":"Accrued Vacation",
           "InternalValue":"Accrued Vacation",
           "Active":true
        },
        {
           "ID":242,
           "DisplayName":"Affiliated IB Settlements",
           "InternalValue":"Affiliated IB Settlements",
           "Active":true
        },
        {
           "ID":243,
           "DisplayName":"ATM Check Card Clearance",
           "InternalValue":"ATM Check Card Clearance",
           "Active":true
        },
        {
           "ID":244,
           "DisplayName":"ATM Deposits Clearance",
           "InternalValue":"ATM Deposits Clearance",
           "Active":true
        },
        {
           "ID":245,
           "DisplayName":"ATM Refund Expense",
           "InternalValue":"ATM Refund Expense",
           "Active":true
        },
        {
           "ID":246,
           "DisplayName":"Backoffice Misc Write offs",
           "InternalValue":"Backoffice Misc Write offs",
           "Active":true
        },
        {
           "ID":247,
           "DisplayName":"Bank Fees",
           "InternalValue":"Bank Fees",
           "Active":true
        },
        {
           "ID":248,
           "DisplayName":"Banking and investment",
           "InternalValue":"Banking and investment",
           "Active":true
        },
        {
           "ID":249,
           "DisplayName":"BLANK",
           "InternalValue":"BLANKSpendCategory",
           "Active":true
        },
        {
           "ID":250,
           "DisplayName":"Card Fraud Provision",
           "InternalValue":"Card Fraud Provision",
           "Active":true
        },
        {
           "ID":251,
           "DisplayName":"Class_80142000_Customer relationship management services_Non-Cap",
           "InternalValue":"Class_80142000_Customer relationship management services_Non-Cap",
           "Active":true
        },
        {
           "ID":252,
           "DisplayName":"Commodity_81112002_Data processing or preparation services_Non-Cap",
           "InternalValue":"Commodity_81112002_Data processing or preparation services_Non-Cap",
           "Active":true
        },
        {
           "ID":253,
           "DisplayName":"Commodity_84121601_Funds clearance services_Non-Cap",
           "InternalValue":"Commodity_84121601_Funds clearance services_Non-Cap",
           "Active":true
        },
        {
           "ID":254,
           "DisplayName":"Commodity_84121604_Spot exchange transaction services_Non-Cap",
           "InternalValue":"Commodity_84121604_Spot exchange transaction services_Non-Cap",
           "Active":true
        },
        {
           "ID":255,
           "DisplayName":"Commodity_94101502_Regulatory associations_Non-Cap",
           "InternalValue":"Commodity_94101502_Regulatory associations_Non-Cap",
           "Active":true
        },
        {
           "ID":256,
           "DisplayName":"Custom_8010151302_Outsourced Business Processes Non Tech - Non Recurring_Non-Cap",
           "InternalValue":"Custom_8010151302_Outsourced Business Processes Non Tech - Non Recurring_Non-Cap",
           "Active":true
        },
        {
           "ID":257,
           "DisplayName":"Custom_8014200101_Reference or Background Check Services (Non-Employee)_Non-Cap",
           "InternalValue":"Custom_8014200101_Reference or Background Check Services (Non-Employee)_Non-Cap",
           "Active":true
        },
        {
           "ID":258,
           "DisplayName":"Customer BD Compromised Fraud",
           "InternalValue":"Customer BD Compromised Fraud",
           "Active":true
        },
        {
           "ID":259,
           "DisplayName":"Customer Expense Reimbursement",
           "InternalValue":"Customer Expense Reimbursement",
           "Active":true
        },
        {
           "ID":260,
           "DisplayName":"Default Loan Servicing Expense",
           "InternalValue":"Default Loan Servicing Expense",
           "Active":true
        },
        {
           "ID":261,
           "DisplayName":"Digital/Acquisition 1",
           "InternalValue":"Digital/Acquisition 1",
           "Active":true
        },
        {
           "ID":262,
           "DisplayName":"Disability Insurance",
           "InternalValue":"Disability Insurance",
           "Active":true
        },
        {
           "ID":263,
           "DisplayName":"DTC/OCC/NSCC Fees",
           "InternalValue":"DTC/OCC/NSCC Fees",
           "Active":true
        },
        {
           "ID":264,
           "DisplayName":"DTCC - Account Fees",
           "InternalValue":"DTCC - Account Fees",
           "Active":true
        },
        {
           "ID":265,
           "DisplayName":"DTCC - ADR Custody Services",
           "InternalValue":"DTCC - ADR Custody Services",
           "Active":true
        },
        {
           "ID":266,
           "DisplayName":"Educational Reimbursements",
           "InternalValue":"Educational Reimbursements",
           "Active":true
        },
        {
           "ID":267,
           "DisplayName":"Employee Recognition",
           "InternalValue":"Employee Recognition",
           "Active":true
        },
        {
           "ID":268,
           "DisplayName":"FATCA W/H",
           "InternalValue":"FATCA W/H",
           "Active":true
        },
        {
           "ID":269,
           "DisplayName":"FC Commission",
           "InternalValue":"FC Commission",
           "Active":true
        },
        {
           "ID":270,
           "DisplayName":"FC/Retention and Service",
           "InternalValue":"FC/Retention and Service",
           "Active":true
        },
        {
           "ID":271,
           "DisplayName":"Fed IRA Distribution",
           "InternalValue":"Fed IRA Distribution",
           "Active":true
        },
        {
           "ID":272,
           "DisplayName":"Federal Unemployment Tax",
           "InternalValue":"Federal Unemployment Tax",
           "Active":true
        },
        {
           "ID":273,
           "DisplayName":"Fraud Charge Off",
           "InternalValue":"Fraud Charge Off",
           "Active":true
        },
        {
           "ID":274,
           "DisplayName":"Fraud Recovery",
           "InternalValue":"Fraud Recovery",
           "Active":true
        },
        {
           "ID":275,
           "DisplayName":"FX Gain/Loss",
           "InternalValue":"FX Gain/Loss",
           "Active":true
        },
        {
           "ID":276,
           "DisplayName":"Gain/Loss on REO Sale",
           "InternalValue":"Gain/Loss on REO Sale",
           "Active":true
        },
        {
           "ID":277,
           "DisplayName":"Health Insurance",
           "InternalValue":"Health Insurance",
           "Active":true
        },
        {
           "ID":278,
           "DisplayName":"HFS ML Servicing Expenses",
           "InternalValue":"HFS ML Servicing Expenses",
           "Active":true
        },
        {
           "ID":279,
           "DisplayName":"H-Professional Services-Outsourced Labor; Custom_8010151302_Outsourced Business Processes Non Tech - Non Recurring_Non-Cap",
           "InternalValue":"H-Professional Services-Outsourced Labor; Custom_8010151302_Outsourced Business Processes Non Tech - Non Recurring_Non-Cap",
           "Active":true
        },
        {
           "ID":280,
           "DisplayName":"HTM ML Servicing Expenses",
           "InternalValue":"HTM ML Servicing Expenses",
           "Active":true
        },
        {
           "ID":281,
           "DisplayName":"ICO Payroll",
           "InternalValue":"ICO Payroll",
           "Active":true
        },
        {
           "ID":282,
           "DisplayName":"Inventory PL-Errors",
           "InternalValue":"Inventory PL-Errors",
           "Active":true
        },
        {
           "ID":283,
           "DisplayName":"JPM - Processing",
           "InternalValue":"JPM - Processing",
           "Active":true
        },
        {
           "ID":284,
           "DisplayName":"Loan Collections Expenses",
           "InternalValue":"Loan Collections Expenses",
           "Active":true
        },
        {
           "ID":285,
           "DisplayName":"Loss Mitigation Services Expense",
           "InternalValue":"Loss Mitigation Services Expense",
           "Active":true
        },
        {
           "ID":286,
           "DisplayName":"Medicare Tax",
           "InternalValue":"Medicare Tax",
           "Active":true
        },
        {
           "ID":287,
           "DisplayName":"MF - Omnibus CDSC Fee Accrual - Charles Schwab",
           "InternalValue":"MF - Omnibus CDSC Fee Accrual - Charles Schwab",
           "Active":true
        },
        {
           "ID":288,
           "DisplayName":"MF - Omnibus STTF Fee Accrual - Charles Schwab",
           "InternalValue":"MF - Omnibus STTF Fee Accrual - Charles Schwab",
           "Active":true
        },
        {
           "ID":289,
           "DisplayName":"Mutual Fund Omnibus Position Based Clearing Fees ",
           "InternalValue":"Mutual Fund Omnibus Position Based Clearing Fees ",
           "Active":true
        },
        {
           "ID":290,
           "DisplayName":"Need Spend Category?",
           "InternalValue":"Need Spend Category?",
           "Active":true
        },
        {
           "ID":291,
           "DisplayName":"NRA Tax W/H",
           "InternalValue":"NRA Tax W/H",
           "Active":true
        },
        {
           "ID":292,
           "DisplayName":"Options Reg Fee",
           "InternalValue":"Options Reg Fee",
           "Active":true
        },
        {
           "ID":293,
           "DisplayName":"Other Bonuses",
           "InternalValue":"Other Bonuses",
           "Active":true
        },
        {
           "ID":294,
           "DisplayName":"Other Brokerage Payables",
           "InternalValue":"Other Brokerage Payables",
           "Active":true
        },
        {
           "ID":295,
           "DisplayName":"Other Clearing Fees",
           "InternalValue":"Other Clearing Fees",
           "Active":true
        },
        {
           "ID":296,
           "DisplayName":"Other Compensation",
           "InternalValue":"Other Compensation",
           "Active":true
        },
        {
           "ID":297,
           "DisplayName":"Other Loan Servicing Expense",
           "InternalValue":"Other Loan Servicing Expense",
           "Active":true
        },
        {
           "ID":298,
           "DisplayName":"Other Miscellaneous Expenses",
           "InternalValue":"Other Miscellaneous Expenses",
           "Active":true
        },
        {
           "ID":299,
           "DisplayName":"Overdraft Loss",
           "InternalValue":"Overdraft Loss",
           "Active":true
        },
        {
           "ID":300,
           "DisplayName":"Overtime Salaries",
           "InternalValue":"Overtime Salaries",
           "Active":true
        },
        {
           "ID":301,
           "DisplayName":"Payroll tax",
           "InternalValue":"Payroll tax",
           "Active":true
        },
        {
           "ID":302,
           "DisplayName":"Regular Salaries",
           "InternalValue":"Regular Salaries",
           "Active":true
        },
        {
           "ID":303,
           "DisplayName":"REO Expenses",
           "InternalValue":"REO Expenses",
           "Active":true
        },
        {
           "ID":304,
           "DisplayName":"Salaries Overtime",
           "InternalValue":"Salaries Overtime",
           "Active":true
        },
        {
           "ID":305,
           "DisplayName":"Salaries Regular",
           "InternalValue":"Salaries Regular",
           "Active":true
        },
        {
           "ID":306,
           "DisplayName":"Salaries Shift Premium",
           "InternalValue":"Salaries Shift Premium",
           "Active":true
        },
        {
           "ID":307,
           "DisplayName":"SEC Fees",
           "InternalValue":"SEC Fees",
           "Active":true
        },
        {
           "ID":308,
           "DisplayName":"Severance Salary",
           "InternalValue":"Severance Salary",
           "Active":true
        },
        {
           "ID":309,
           "DisplayName":"Shift Premium Salaries",
           "InternalValue":"Shift Premium Salaries",
           "Active":true
        },
        {
           "ID":310,
           "DisplayName":"Sign on Bonus",
           "InternalValue":"Sign on Bonus",
           "Active":true
        },
        {
           "ID":311,
           "DisplayName":"Social Sec & Other P/R Taxes",
           "InternalValue":"Social Sec & Other P/R Taxes",
           "Active":true
        },
        {
           "ID":312,
           "DisplayName":"Social Security Tax",
           "InternalValue":"Social Security Tax",
           "Active":true
        },
        {
           "ID":313,
           "DisplayName":"State IRA Distribution",
           "InternalValue":"State IRA Distribution",
           "Active":true
        },
        {
           "ID":314,
           "DisplayName":"State Non-IRA W/H",
           "InternalValue":"State Non-IRA W/H",
           "Active":true
        },
        {
           "ID":315,
           "DisplayName":"State Unemployment Tax",
           "InternalValue":"State Unemployment Tax",
           "Active":true
        },
        {
           "ID":316,
           "DisplayName":"Tax on Payments in Lieu     ",
           "InternalValue":"Tax on Payments in Lieu     ",
           "Active":true
        },
        {
           "ID":317,
           "DisplayName":"TEFRA W/H",
           "InternalValue":"TEFRA W/H",
           "Active":true
        },
        {
           "ID":318,
           "DisplayName":"Vacation Accrued",
           "InternalValue":"Vacation Accrued",
           "Active":true
        },
        {
           "ID":319,
           "DisplayName":"Vacation Paid",
           "InternalValue":"Vacation Paid",
           "Active":true
        }
     ]
  },
  {
     "MappingColumnName":"CostCenterID",
     "DisplayName":"Cost Center",
     "Filtering":"false",
     "headerStyle":null,
     "cellStyle":"padding: 0",
     "Search":true,
     "Editable":null,
     "ScrnDisplay":true,
     "Type":"LOV",
     "Active":true,
     "ColumnOrder":12,
     "Options":[
        {
           "ID":320,
           "DisplayName":"1001",
           "InternalValue":"1001",
           "Active":true
        },
        {
           "ID":321,
           "DisplayName":"1002",
           "InternalValue":"1002",
           "Active":true
        },
        {
           "ID":322,
           "DisplayName":"1003",
           "InternalValue":"1003",
           "Active":true
        },
        {
           "ID":323,
           "DisplayName":"1004",
           "InternalValue":"1004",
           "Active":true
        },
        {
           "ID":324,
           "DisplayName":"1005",
           "InternalValue":"1005",
           "Active":true
        },
        {
           "ID":325,
           "DisplayName":"1006",
           "InternalValue":"1006",
           "Active":true
        },
        {
           "ID":326,
           "DisplayName":"1007",
           "InternalValue":"1007",
           "Active":true
        },
        {
           "ID":327,
           "DisplayName":"1008",
           "InternalValue":"1008",
           "Active":true
        },
        {
           "ID":328,
           "DisplayName":"1009",
           "InternalValue":"1009",
           "Active":true
        },
        {
           "ID":329,
           "DisplayName":"1010",
           "InternalValue":"1010",
           "Active":true
        },
        {
           "ID":330,
           "DisplayName":"1012",
           "InternalValue":"1012",
           "Active":true
        },
        {
           "ID":331,
           "DisplayName":"1013",
           "InternalValue":"1013",
           "Active":true
        },
        {
           "ID":332,
           "DisplayName":"1014",
           "InternalValue":"1014",
           "Active":true
        },
        {
           "ID":333,
           "DisplayName":"1015",
           "InternalValue":"1015",
           "Active":true
        },
        {
           "ID":334,
           "DisplayName":"1016",
           "InternalValue":"1016",
           "Active":true
        },
        {
           "ID":335,
           "DisplayName":"1017",
           "InternalValue":"1017",
           "Active":true
        },
        {
           "ID":336,
           "DisplayName":"1018",
           "InternalValue":"1018",
           "Active":true
        },
        {
           "ID":337,
           "DisplayName":"1019",
           "InternalValue":"1019",
           "Active":true
        },
        {
           "ID":338,
           "DisplayName":"1020",
           "InternalValue":"1020",
           "Active":true
        },
        {
           "ID":339,
           "DisplayName":"1021",
           "InternalValue":"1021",
           "Active":true
        },
        {
           "ID":340,
           "DisplayName":"1022",
           "InternalValue":"1022",
           "Active":true
        },
        {
           "ID":341,
           "DisplayName":"1023",
           "InternalValue":"1023",
           "Active":true
        },
        {
           "ID":342,
           "DisplayName":"1024",
           "InternalValue":"1024",
           "Active":true
        },
        {
           "ID":343,
           "DisplayName":"1029",
           "InternalValue":"1029",
           "Active":true
        },
        {
           "ID":344,
           "DisplayName":"1030",
           "InternalValue":"1030",
           "Active":true
        },
        {
           "ID":345,
           "DisplayName":"1031",
           "InternalValue":"1031",
           "Active":true
        },
        {
           "ID":346,
           "DisplayName":"1032",
           "InternalValue":"1032",
           "Active":true
        },
        {
           "ID":347,
           "DisplayName":"1033",
           "InternalValue":"1033",
           "Active":true
        },
        {
           "ID":348,
           "DisplayName":"1034",
           "InternalValue":"1034",
           "Active":true
        },
        {
           "ID":349,
           "DisplayName":"1035",
           "InternalValue":"1035",
           "Active":true
        },
        {
           "ID":350,
           "DisplayName":"1036",
           "InternalValue":"1036",
           "Active":true
        },
        {
           "ID":351,
           "DisplayName":"1039",
           "InternalValue":"1039",
           "Active":true
        },
        {
           "ID":352,
           "DisplayName":"1040",
           "InternalValue":"1040",
           "Active":true
        },
        {
           "ID":353,
           "DisplayName":"1041",
           "InternalValue":"1041",
           "Active":true
        },
        {
           "ID":354,
           "DisplayName":"1043",
           "InternalValue":"1043",
           "Active":true
        },
        {
           "ID":355,
           "DisplayName":"1044",
           "InternalValue":"1044",
           "Active":true
        },
        {
           "ID":356,
           "DisplayName":"1045",
           "InternalValue":"1045",
           "Active":true
        },
        {
           "ID":357,
           "DisplayName":"1048",
           "InternalValue":"1048",
           "Active":true
        },
        {
           "ID":358,
           "DisplayName":"1049",
           "InternalValue":"1049",
           "Active":true
        },
        {
           "ID":359,
           "DisplayName":"1050",
           "InternalValue":"1050",
           "Active":true
        },
        {
           "ID":360,
           "DisplayName":"1051",
           "InternalValue":"1051",
           "Active":true
        },
        {
           "ID":361,
           "DisplayName":"1052",
           "InternalValue":"1052",
           "Active":true
        },
        {
           "ID":362,
           "DisplayName":"1054",
           "InternalValue":"1054",
           "Active":true
        },
        {
           "ID":363,
           "DisplayName":"1055",
           "InternalValue":"1055",
           "Active":true
        },
        {
           "ID":364,
           "DisplayName":"1056",
           "InternalValue":"1056",
           "Active":true
        },
        {
           "ID":365,
           "DisplayName":"1057",
           "InternalValue":"1057",
           "Active":true
        },
        {
           "ID":366,
           "DisplayName":"1058",
           "InternalValue":"1058",
           "Active":true
        },
        {
           "ID":367,
           "DisplayName":"1059",
           "InternalValue":"1059",
           "Active":true
        },
        {
           "ID":368,
           "DisplayName":"1060",
           "InternalValue":"1060",
           "Active":true
        },
        {
           "ID":369,
           "DisplayName":"1061",
           "InternalValue":"1061",
           "Active":true
        },
        {
           "ID":370,
           "DisplayName":"1062",
           "InternalValue":"1062",
           "Active":true
        },
        {
           "ID":371,
           "DisplayName":"1063",
           "InternalValue":"1063",
           "Active":true
        },
        {
           "ID":372,
           "DisplayName":"1064",
           "InternalValue":"1064",
           "Active":true
        },
        {
           "ID":373,
           "DisplayName":"1065",
           "InternalValue":"1065",
           "Active":true
        },
        {
           "ID":374,
           "DisplayName":"1066",
           "InternalValue":"1066",
           "Active":true
        },
        {
           "ID":375,
           "DisplayName":"1067",
           "InternalValue":"1067",
           "Active":true
        },
        {
           "ID":376,
           "DisplayName":"1071",
           "InternalValue":"1071",
           "Active":true
        },
        {
           "ID":377,
           "DisplayName":"1072",
           "InternalValue":"1072",
           "Active":true
        },
        {
           "ID":378,
           "DisplayName":"1074",
           "InternalValue":"1074",
           "Active":true
        },
        {
           "ID":379,
           "DisplayName":"1075",
           "InternalValue":"1075",
           "Active":true
        },
        {
           "ID":380,
           "DisplayName":"1076",
           "InternalValue":"1076",
           "Active":true
        },
        {
           "ID":381,
           "DisplayName":"1077",
           "InternalValue":"1077",
           "Active":true
        },
        {
           "ID":382,
           "DisplayName":"1078",
           "InternalValue":"1078",
           "Active":true
        },
        {
           "ID":383,
           "DisplayName":"1079",
           "InternalValue":"1079",
           "Active":true
        },
        {
           "ID":384,
           "DisplayName":"1082",
           "InternalValue":"1082",
           "Active":true
        },
        {
           "ID":385,
           "DisplayName":"1083",
           "InternalValue":"1083",
           "Active":true
        },
        {
           "ID":386,
           "DisplayName":"1084",
           "InternalValue":"1084",
           "Active":true
        },
        {
           "ID":387,
           "DisplayName":"1085",
           "InternalValue":"1085",
           "Active":true
        },
        {
           "ID":388,
           "DisplayName":"1087",
           "InternalValue":"1087",
           "Active":true
        },
        {
           "ID":389,
           "DisplayName":"1090",
           "InternalValue":"1090",
           "Active":true
        },
        {
           "ID":390,
           "DisplayName":"1091",
           "InternalValue":"1091",
           "Active":true
        },
        {
           "ID":391,
           "DisplayName":"1092",
           "InternalValue":"1092",
           "Active":true
        },
        {
           "ID":392,
           "DisplayName":"1093",
           "InternalValue":"1093",
           "Active":true
        },
        {
           "ID":393,
           "DisplayName":"1094",
           "InternalValue":"1094",
           "Active":true
        },
        {
           "ID":394,
           "DisplayName":"1096",
           "InternalValue":"1096",
           "Active":true
        },
        {
           "ID":395,
           "DisplayName":"1097",
           "InternalValue":"1097",
           "Active":true
        },
        {
           "ID":396,
           "DisplayName":"1098",
           "InternalValue":"1098",
           "Active":true
        },
        {
           "ID":397,
           "DisplayName":"1099",
           "InternalValue":"1099",
           "Active":true
        },
        {
           "ID":398,
           "DisplayName":"1100",
           "InternalValue":"1100",
           "Active":true
        },
        {
           "ID":399,
           "DisplayName":"1102",
           "InternalValue":"1102",
           "Active":true
        },
        {
           "ID":400,
           "DisplayName":"1103",
           "InternalValue":"1103",
           "Active":true
        },
        {
           "ID":401,
           "DisplayName":"1104",
           "InternalValue":"1104",
           "Active":true
        },
        {
           "ID":402,
           "DisplayName":"1107",
           "InternalValue":"1107",
           "Active":true
        },
        {
           "ID":403,
           "DisplayName":"1108",
           "InternalValue":"1108",
           "Active":true
        },
        {
           "ID":404,
           "DisplayName":"1109",
           "InternalValue":"1109",
           "Active":true
        },
        {
           "ID":405,
           "DisplayName":"1111",
           "InternalValue":"1111",
           "Active":true
        },
        {
           "ID":406,
           "DisplayName":"1112",
           "InternalValue":"1112",
           "Active":true
        },
        {
           "ID":407,
           "DisplayName":"1114",
           "InternalValue":"1114",
           "Active":true
        },
        {
           "ID":408,
           "DisplayName":"1115",
           "InternalValue":"1115",
           "Active":true
        },
        {
           "ID":409,
           "DisplayName":"1116",
           "InternalValue":"1116",
           "Active":true
        },
        {
           "ID":410,
           "DisplayName":"1117",
           "InternalValue":"1117",
           "Active":true
        },
        {
           "ID":411,
           "DisplayName":"1119",
           "InternalValue":"1119",
           "Active":true
        },
        {
           "ID":412,
           "DisplayName":"1120",
           "InternalValue":"1120",
           "Active":true
        },
        {
           "ID":413,
           "DisplayName":"1121",
           "InternalValue":"1121",
           "Active":true
        },
        {
           "ID":414,
           "DisplayName":"1122",
           "InternalValue":"1122",
           "Active":true
        },
        {
           "ID":415,
           "DisplayName":"1123",
           "InternalValue":"1123",
           "Active":true
        },
        {
           "ID":416,
           "DisplayName":"1124",
           "InternalValue":"1124",
           "Active":true
        },
        {
           "ID":417,
           "DisplayName":"1125",
           "InternalValue":"1125",
           "Active":true
        },
        {
           "ID":418,
           "DisplayName":"1127",
           "InternalValue":"1127",
           "Active":true
        },
        {
           "ID":419,
           "DisplayName":"1128",
           "InternalValue":"1128",
           "Active":true
        },
        {
           "ID":420,
           "DisplayName":"1130",
           "InternalValue":"1130",
           "Active":true
        },
        {
           "ID":421,
           "DisplayName":"1131",
           "InternalValue":"1131",
           "Active":true
        },
        {
           "ID":422,
           "DisplayName":"1133",
           "InternalValue":"1133",
           "Active":true
        },
        {
           "ID":423,
           "DisplayName":"1134",
           "InternalValue":"1134",
           "Active":true
        },
        {
           "ID":424,
           "DisplayName":"1135",
           "InternalValue":"1135",
           "Active":true
        },
        {
           "ID":425,
           "DisplayName":"1136",
           "InternalValue":"1136",
           "Active":true
        },
        {
           "ID":426,
           "DisplayName":"1137",
           "InternalValue":"1137",
           "Active":true
        },
        {
           "ID":427,
           "DisplayName":"1139",
           "InternalValue":"1139",
           "Active":true
        },
        {
           "ID":428,
           "DisplayName":"1140",
           "InternalValue":"1140",
           "Active":true
        },
        {
           "ID":429,
           "DisplayName":"1141",
           "InternalValue":"1141",
           "Active":true
        },
        {
           "ID":430,
           "DisplayName":"1142",
           "InternalValue":"1142",
           "Active":true
        },
        {
           "ID":431,
           "DisplayName":"1143",
           "InternalValue":"1143",
           "Active":true
        },
        {
           "ID":432,
           "DisplayName":"1144",
           "InternalValue":"1144",
           "Active":true
        },
        {
           "ID":433,
           "DisplayName":"1145",
           "InternalValue":"1145",
           "Active":true
        },
        {
           "ID":434,
           "DisplayName":"1146",
           "InternalValue":"1146",
           "Active":true
        },
        {
           "ID":435,
           "DisplayName":"1147",
           "InternalValue":"1147",
           "Active":true
        },
        {
           "ID":436,
           "DisplayName":"1148",
           "InternalValue":"1148",
           "Active":true
        },
        {
           "ID":437,
           "DisplayName":"1149",
           "InternalValue":"1149",
           "Active":true
        },
        {
           "ID":438,
           "DisplayName":"1150",
           "InternalValue":"1150",
           "Active":true
        },
        {
           "ID":439,
           "DisplayName":"1151",
           "InternalValue":"1151",
           "Active":true
        },
        {
           "ID":440,
           "DisplayName":"1152",
           "InternalValue":"1152",
           "Active":true
        },
        {
           "ID":441,
           "DisplayName":"1155",
           "InternalValue":"1155",
           "Active":true
        },
        {
           "ID":442,
           "DisplayName":"1156",
           "InternalValue":"1156",
           "Active":true
        },
        {
           "ID":443,
           "DisplayName":"1157",
           "InternalValue":"1157",
           "Active":true
        },
        {
           "ID":444,
           "DisplayName":"1158",
           "InternalValue":"1158",
           "Active":true
        },
        {
           "ID":445,
           "DisplayName":"1159",
           "InternalValue":"1159",
           "Active":true
        },
        {
           "ID":446,
           "DisplayName":"1160",
           "InternalValue":"1160",
           "Active":true
        },
        {
           "ID":447,
           "DisplayName":"1162",
           "InternalValue":"1162",
           "Active":true
        },
        {
           "ID":448,
           "DisplayName":"1163",
           "InternalValue":"1163",
           "Active":true
        },
        {
           "ID":449,
           "DisplayName":"1165",
           "InternalValue":"1165",
           "Active":true
        },
        {
           "ID":450,
           "DisplayName":"1166",
           "InternalValue":"1166",
           "Active":true
        },
        {
           "ID":451,
           "DisplayName":"1167",
           "InternalValue":"1167",
           "Active":true
        },
        {
           "ID":452,
           "DisplayName":"1168",
           "InternalValue":"1168",
           "Active":true
        },
        {
           "ID":453,
           "DisplayName":"1169",
           "InternalValue":"1169",
           "Active":true
        },
        {
           "ID":454,
           "DisplayName":"1170",
           "InternalValue":"1170",
           "Active":true
        },
        {
           "ID":455,
           "DisplayName":"1171",
           "InternalValue":"1171",
           "Active":true
        },
        {
           "ID":456,
           "DisplayName":"1172",
           "InternalValue":"1172",
           "Active":true
        },
        {
           "ID":457,
           "DisplayName":"1173",
           "InternalValue":"1173",
           "Active":true
        },
        {
           "ID":458,
           "DisplayName":"1175",
           "InternalValue":"1175",
           "Active":true
        },
        {
           "ID":459,
           "DisplayName":"1177",
           "InternalValue":"1177",
           "Active":true
        },
        {
           "ID":460,
           "DisplayName":"1178",
           "InternalValue":"1178",
           "Active":true
        },
        {
           "ID":461,
           "DisplayName":"1179",
           "InternalValue":"1179",
           "Active":true
        },
        {
           "ID":462,
           "DisplayName":"1180",
           "InternalValue":"1180",
           "Active":true
        },
        {
           "ID":463,
           "DisplayName":"1181",
           "InternalValue":"1181",
           "Active":true
        },
        {
           "ID":464,
           "DisplayName":"1182",
           "InternalValue":"1182",
           "Active":true
        },
        {
           "ID":465,
           "DisplayName":"1184",
           "InternalValue":"1184",
           "Active":true
        },
        {
           "ID":466,
           "DisplayName":"1185",
           "InternalValue":"1185",
           "Active":true
        },
        {
           "ID":467,
           "DisplayName":"1186",
           "InternalValue":"1186",
           "Active":true
        },
        {
           "ID":468,
           "DisplayName":"1187",
           "InternalValue":"1187",
           "Active":true
        },
        {
           "ID":469,
           "DisplayName":"1188",
           "InternalValue":"1188",
           "Active":true
        },
        {
           "ID":470,
           "DisplayName":"1190",
           "InternalValue":"1190",
           "Active":true
        },
        {
           "ID":471,
           "DisplayName":"1191",
           "InternalValue":"1191",
           "Active":true
        },
        {
           "ID":472,
           "DisplayName":"1192",
           "InternalValue":"1192",
           "Active":true
        },
        {
           "ID":473,
           "DisplayName":"1193",
           "InternalValue":"1193",
           "Active":true
        },
        {
           "ID":474,
           "DisplayName":"1194",
           "InternalValue":"1194",
           "Active":true
        },
        {
           "ID":475,
           "DisplayName":"1195",
           "InternalValue":"1195",
           "Active":true
        },
        {
           "ID":476,
           "DisplayName":"1197",
           "InternalValue":"1197",
           "Active":true
        },
        {
           "ID":477,
           "DisplayName":"1198",
           "InternalValue":"1198",
           "Active":true
        },
        {
           "ID":478,
           "DisplayName":"1199",
           "InternalValue":"1199",
           "Active":true
        },
        {
           "ID":479,
           "DisplayName":"1200",
           "InternalValue":"1200",
           "Active":true
        },
        {
           "ID":480,
           "DisplayName":"1201",
           "InternalValue":"1201",
           "Active":true
        },
        {
           "ID":481,
           "DisplayName":"1202",
           "InternalValue":"1202",
           "Active":true
        },
        {
           "ID":482,
           "DisplayName":"1203",
           "InternalValue":"1203",
           "Active":true
        },
        {
           "ID":483,
           "DisplayName":"1204",
           "InternalValue":"1204",
           "Active":true
        },
        {
           "ID":484,
           "DisplayName":"1205",
           "InternalValue":"1205",
           "Active":true
        },
        {
           "ID":485,
           "DisplayName":"1206",
           "InternalValue":"1206",
           "Active":true
        },
        {
           "ID":486,
           "DisplayName":"1207",
           "InternalValue":"1207",
           "Active":true
        },
        {
           "ID":487,
           "DisplayName":"1208",
           "InternalValue":"1208",
           "Active":true
        },
        {
           "ID":488,
           "DisplayName":"1209",
           "InternalValue":"1209",
           "Active":true
        },
        {
           "ID":489,
           "DisplayName":"1210",
           "InternalValue":"1210",
           "Active":true
        },
        {
           "ID":490,
           "DisplayName":"1211",
           "InternalValue":"1211",
           "Active":true
        },
        {
           "ID":491,
           "DisplayName":"1212",
           "InternalValue":"1212",
           "Active":true
        },
        {
           "ID":492,
           "DisplayName":"1213",
           "InternalValue":"1213",
           "Active":true
        },
        {
           "ID":493,
           "DisplayName":"1214",
           "InternalValue":"1214",
           "Active":true
        },
        {
           "ID":494,
           "DisplayName":"1215",
           "InternalValue":"1215",
           "Active":true
        },
        {
           "ID":495,
           "DisplayName":"1216",
           "InternalValue":"1216",
           "Active":true
        },
        {
           "ID":496,
           "DisplayName":"1217",
           "InternalValue":"1217",
           "Active":true
        },
        {
           "ID":497,
           "DisplayName":"1218",
           "InternalValue":"1218",
           "Active":true
        }
     ]
  },
  {
     "MappingColumnName":"LocationID",
     "DisplayName":"Location",
     "Filtering":"false",
     "headerStyle":null,
     "cellStyle":"padding: 0",
     "Search":true,
     "Editable":null,
     "ScrnDisplay":true,
     "Type":"LOV",
     "Active":true,
     "ColumnOrder":13,
     "Options":[
        {
           "ID":498,
           "DisplayName":"42nd_Street_-_New_York_Branch",
           "InternalValue":"42nd_Street_-_New_York_Branch",
           "Active":true
        },
        {
           "ID":499,
           "DisplayName":"Alpharetta_Corporate_Site",
           "InternalValue":"Alpharetta_Corporate_Site",
           "Active":true
        },
        {
           "ID":500,
           "DisplayName":"Alpharetta_Data_Center_(M3_Alpha)_-_ROC",
           "InternalValue":"Alpharetta_Data_Center_(M3_Alpha)_-_ROC",
           "Active":true
        },
        {
           "ID":501,
           "DisplayName":"Arlington_Corporate_Site",
           "InternalValue":"Arlington_Corporate_Site",
           "Active":true
        },
        {
           "ID":502,
           "DisplayName":"Atlanta_Branch",
           "InternalValue":"Atlanta_Branch",
           "Active":true
        },
        {
           "ID":503,
           "DisplayName":"BLANK",
           "InternalValue":"BLANKLocation",
           "Active":true
        },
        {
           "ID":504,
           "DisplayName":"Boston_Branch",
           "InternalValue":"Boston_Branch",
           "Active":true
        },
        {
           "ID":505,
           "DisplayName":"Brentwood_Branch",
           "InternalValue":"Brentwood_Branch",
           "Active":true
        },
        {
           "ID":506,
           "DisplayName":"Centennial_Corporate_Site",
           "InternalValue":"Centennial_Corporate_Site",
           "Active":true
        },
        {
           "ID":507,
           "DisplayName":"Charlotte_Branch",
           "InternalValue":"Charlotte_Branch",
           "Active":true
        },
        {
           "ID":508,
           "DisplayName":"Chicago_Branch",
           "InternalValue":"Chicago_Branch",
           "Active":true
        },
        {
           "ID":509,
           "DisplayName":"Chicago_Corporate_Site",
           "InternalValue":"Chicago_Corporate_Site",
           "Active":true
        },
        {
           "ID":510,
           "DisplayName":"Costa_Mesa_Branch",
           "InternalValue":"Costa_Mesa_Branch",
           "Active":true
        },
        {
           "ID":511,
           "DisplayName":"Cupertino_Branch",
           "InternalValue":"Cupertino_Branch",
           "Active":true
        },
        {
           "ID":512,
           "DisplayName":"Dallas_Branch",
           "InternalValue":"Dallas_Branch",
           "Active":true
        },
        {
           "ID":513,
           "DisplayName":"Denver_Branch",
           "InternalValue":"Denver_Branch",
           "Active":true
        },
        {
           "ID":514,
           "DisplayName":"Edina_Branch",
           "InternalValue":"Edina_Branch",
           "Active":true
        },
        {
           "ID":515,
           "DisplayName":"Farmington_Hills_Branch",
           "InternalValue":"Farmington_Hills_Branch",
           "Active":true
        },
        {
           "ID":516,
           "DisplayName":"Fort_Lauderdale_Branch",
           "InternalValue":"Fort_Lauderdale_Branch",
           "Active":true
        },
        {
           "ID":517,
           "DisplayName":"Garden_City_Branch",
           "InternalValue":"Garden_City_Branch",
           "Active":true
        },
        {
           "ID":518,
           "DisplayName":"Houston_Branch",
           "InternalValue":"Houston_Branch",
           "Active":true
        },
        {
           "ID":519,
           "DisplayName":"Jersey_City_Corporate_Site",
           "InternalValue":"Jersey_City_Corporate_Site",
           "Active":true
        },
        {
           "ID":520,
           "DisplayName":"K_Street_-_Washington_Branch",
           "InternalValue":"K_Street_-_Washington_Branch",
           "Active":true
        },
        {
           "ID":521,
           "DisplayName":"King_of_Prussia_Branch",
           "InternalValue":"King_of_Prussia_Branch",
           "Active":true
        },
        {
           "ID":522,
           "DisplayName":"La_Jolla_Branch",
           "InternalValue":"La_Jolla_Branch",
           "Active":true
        },
        {
           "ID":523,
           "DisplayName":"Makati_Corporate_Site",
           "InternalValue":"Makati_Corporate_Site",
           "Active":true
        },
        {
           "ID":524,
           "DisplayName":"Menlo_Park_Corporate_Site",
           "InternalValue":"Menlo_Park_Corporate_Site",
           "Active":true
        },
        {
           "ID":525,
           "DisplayName":"Morristown_Branch",
           "InternalValue":"Morristown_Branch",
           "Active":true
        },
        {
           "ID":526,
           "DisplayName":"New_York_City_Corporate_Site",
           "InternalValue":"New_York_City_Corporate_Site",
           "Active":true
        },
        {
           "ID":527,
           "DisplayName":"Orlando_(Altamonte_Springs)_Branch",
           "InternalValue":"Orlando_(Altamonte_Springs)_Branch",
           "Active":true
        },
        {
           "ID":528,
           "DisplayName":"Palo_Alto_Branch",
           "InternalValue":"Palo_Alto_Branch",
           "Active":true
        },
        {
           "ID":529,
           "DisplayName":"Portland_Branch",
           "InternalValue":"Portland_Branch",
           "Active":true
        },
        {
           "ID":530,
           "DisplayName":"Rockefeller_Plaza_-_New_York_Branch",
           "InternalValue":"Rockefeller_Plaza_-_New_York_Branch",
           "Active":true
        },
        {
           "ID":531,
           "DisplayName":"Roseville_Branch",
           "InternalValue":"Roseville_Branch",
           "Active":true
        },
        {
           "ID":532,
           "DisplayName":"San_Francisco_Branch",
           "InternalValue":"San_Francisco_Branch",
           "Active":true
        },
        {
           "ID":533,
           "DisplayName":"Sandy_Corporate_Site",
           "InternalValue":"Sandy_Corporate_Site",
           "Active":true
        },
        {
           "ID":534,
           "DisplayName":"Scarsdale_Branch",
           "InternalValue":"Scarsdale_Branch",
           "Active":true
        },
        {
           "ID":535,
           "DisplayName":"Scottsdale_Branch",
           "InternalValue":"Scottsdale_Branch",
           "Active":true
        },
        {
           "ID":536,
           "DisplayName":"Seattle_Branch",
           "InternalValue":"Seattle_Branch",
           "Active":true
        },
        {
           "ID":537,
           "DisplayName":"Tampa_Branch",
           "InternalValue":"Tampa_Branch",
           "Active":true
        },
        {
           "ID":538,
           "DisplayName":"Torrance_Branch",
           "InternalValue":"Torrance_Branch",
           "Active":true
        }
     ]
  },
  {
     "MappingColumnName":"TransactionTypeID",
     "DisplayName":"Transaction Type",
     "Filtering":"false",
     "headerStyle":null,
     "cellStyle":"padding: 0",
     "Search":true,
     "Editable":null,
     "ScrnDisplay":true,
     "Type":"LOV",
     "Active":true,
     "ColumnOrder":14,
     "Options":[
        {
           "ID":539,
           "DisplayName":"Advisory & Custody Fee",
           "InternalValue":"Advisory & Custody Fee",
           "Active":true
        },
        {
           "ID":540,
           "DisplayName":"ATM",
           "InternalValue":"ATMTransactionType",
           "Active":true
        },
        {
           "ID":541,
           "DisplayName":"BLANK",
           "InternalValue":"BLANKTransType",
           "Active":true
        },
        {
           "ID":542,
           "DisplayName":"BONY - Dividend Checks",
           "InternalValue":"BONY - Dividend Checks",
           "Active":true
        },
        {
           "ID":543,
           "DisplayName":"BONY - Outgoing Checks",
           "InternalValue":"BONY - Outgoing Checks",
           "Active":true
        },
        {
           "ID":544,
           "DisplayName":"Credits & rebates",
           "InternalValue":"Credits & rebates",
           "Active":true
        },
        {
           "ID":545,
           "DisplayName":"Customer Service",
           "InternalValue":"Customer Service Transaction Type",
           "Active":true
        },
        {
           "ID":546,
           "DisplayName":"Debit Card",
           "InternalValue":"Debit Card",
           "Active":true
        },
        {
           "ID":547,
           "DisplayName":"ESDA Sweep",
           "InternalValue":"ESDA Sweep",
           "Active":true
        },
        {
           "ID":548,
           "DisplayName":"ETS Inventory Fixed Income",
           "InternalValue":"ETS Inventory Fixed Income",
           "Active":true
        },
        {
           "ID":549,
           "DisplayName":"ETS Street Break Error",
           "InternalValue":"ETS Street Break Error",
           "Active":true
        },
        {
           "ID":550,
           "DisplayName":"Futures",
           "InternalValue":"Futures",
           "Active":true
        },
        {
           "ID":551,
           "DisplayName":"Inventory Errors",
           "InternalValue":"Inventory Errors TransactionType",
           "Active":true
        },
        {
           "ID":552,
           "DisplayName":"Inventory Fixed Income",
           "InternalValue":"Inventory Fixed Income",
           "Active":true
        },
        {
           "ID":553,
           "DisplayName":"Mutual Fund",
           "InternalValue":"Mutual Fund Transaction Type",
           "Active":true
        },
        {
           "ID":554,
           "DisplayName":"Reorg Fee",
           "InternalValue":"Reorg Fee",
           "Active":true
        },
        {
           "ID":555,
           "DisplayName":"Reorg Fee Reversal",
           "InternalValue":"Reorg Fee Reversal",
           "Active":true
        },
        {
           "ID":556,
           "DisplayName":"Worthless Securities",
           "InternalValue":"Worthless Securities",
           "Active":true
        }
     ]
  },
  {
     "MappingColumnName":"BankAccountID",
     "DisplayName":"Bank Account",
     "Filtering":"false",
     "headerStyle":null,
     "cellStyle":"padding: 0",
     "Search":true,
     "Editable":null,
     "ScrnDisplay":true,
     "Type":"LOV",
     "Active":true,
     "ColumnOrder":15,
     "Options":[
        {
           "ID":557,
           "DisplayName":" Citibank IB 0756497006 - PHP",
           "InternalValue":" Citibank IB 0756497006 - PHP",
           "Active":true
        },
        {
           "ID":558,
           "DisplayName":"17600196",
           "InternalValue":"17600196",
           "Active":true
        },
        {
           "ID":559,
           "DisplayName":"17600227",
           "InternalValue":"17600227",
           "Active":true
        },
        {
           "ID":560,
           "DisplayName":"2000008280",
           "InternalValue":"2000008280",
           "Active":true
        },
        {
           "ID":561,
           "DisplayName":"2005849290",
           "InternalValue":"2005849290",
           "Active":true
        },
        {
           "ID":562,
           "DisplayName":"2006774232",
           "InternalValue":"2006774232",
           "Active":true
        },
        {
           "ID":563,
           "DisplayName":"202009981",
           "InternalValue":"202009981",
           "Active":true
        },
        {
           "ID":564,
           "DisplayName":"2020237398",
           "InternalValue":"2020237398",
           "Active":true
        },
        {
           "ID":565,
           "DisplayName":"2025866209",
           "InternalValue":"2025866209",
           "Active":true
        },
        {
           "ID":566,
           "DisplayName":"2025897642",
           "InternalValue":"2025897642",
           "Active":true
        },
        {
           "ID":567,
           "DisplayName":"2025951795",
           "InternalValue":"2025951795",
           "Active":true
        },
        {
           "ID":568,
           "DisplayName":"2026009825",
           "InternalValue":"2026009825",
           "Active":true
        },
        {
           "ID":569,
           "DisplayName":"2026009957",
           "InternalValue":"2026009957",
           "Active":true
        },
        {
           "ID":570,
           "DisplayName":"2026009965",
           "InternalValue":"2026009965",
           "Active":true
        },
        {
           "ID":571,
           "DisplayName":"Back-Office/Oracle Transfer",
           "InternalValue":"Back-Office/Oracle Transfer",
           "Active":true
        },
        {
           "ID":572,
           "DisplayName":"Bank ACH Clearing",
           "InternalValue":"Bank ACH Clearing",
           "Active":true
        },
        {
           "ID":573,
           "DisplayName":"Bank of New York",
           "InternalValue":"Bank of New York",
           "Active":true
        },
        {
           "ID":574,
           "DisplayName":"Black Rock Fed Fund IB 24743-030",
           "InternalValue":"Black Rock Fed Fund IB 24743-030",
           "Active":true
        },
        {
           "ID":575,
           "DisplayName":"Black Rock Money Funds Direct-IB",
           "InternalValue":"Black Rock Money Funds Direct-IB",
           "Active":true
        },
        {
           "ID":576,
           "DisplayName":"BLANK",
           "InternalValue":"BLANKBankAccount",
           "Active":true
        },
        {
           "ID":577,
           "DisplayName":"BMO DDA 2457398 IB USD",
           "InternalValue":"BMO DDA 2457398 IB USD",
           "Active":true
        },
        {
           "ID":578,
           "DisplayName":"BMO DDA 2457562 IB USD",
           "InternalValue":"BMO DDA 2457562 IB USD",
           "Active":true
        },
        {
           "ID":579,
           "DisplayName":"BMO DDA 2457588 IB USD",
           "InternalValue":"BMO DDA 2457588 IB USD",
           "Active":true
        },
        {
           "ID":580,
           "DisplayName":"BMO REG U Settlement 2460475 IB USD",
           "InternalValue":"BMO REG U Settlement 2460475 IB USD",
           "Active":true
        },
        {
           "ID":581,
           "DisplayName":"BNP FX Accounts IB",
           "InternalValue":"BNP FX Accounts IB",
           "Active":true
        },
        {
           "ID":582,
           "DisplayName":"BONY 8900293721 NI USD",
           "InternalValue":"BONY 8900293721 NI USD",
           "Active":true
        },
        {
           "ID":583,
           "DisplayName":"BONY 8900327790 NI USD Direct Deposit",
           "InternalValue":"BONY 8900327790 NI USD Direct Deposit",
           "Active":true
        },
        {
           "ID":584,
           "DisplayName":"BONY 8900351926 NI USD MF Incoming Wires",
           "InternalValue":"BONY 8900351926 NI USD MF Incoming Wires",
           "Active":true
        },
        {
           "ID":585,
           "DisplayName":"BONY 8900378093 NI USD ACH Origination",
           "InternalValue":"BONY 8900378093 NI USD ACH Origination",
           "Active":true
        },
        {
           "ID":586,
           "DisplayName":"BONY 8900419911 NI USD Pay My Bills",
           "InternalValue":"BONY 8900419911 NI USD Pay My Bills",
           "Active":true
        },
        {
           "ID":587,
           "DisplayName":"BONY 8900512040 NI USD Tax Withholdings",
           "InternalValue":"BONY 8900512040 NI USD Tax Withholdings",
           "Active":true
        },
        {
           "ID":588,
           "DisplayName":"BONY 8901260428 NI USD 3rd Party Sweep",
           "InternalValue":"BONY 8901260428 NI USD 3rd Party Sweep",
           "Active":true
        },
        {
           "ID":589,
           "DisplayName":"BONY 9515318400 NI USD MMF Settlement",
           "InternalValue":"BONY 9515318400 NI USD MMF Settlement",
           "Active":true
        },
        {
           "ID":590,
           "DisplayName":"Comerica 1853355731 IB USD",
           "InternalValue":"Comerica 1853355731 IB USD",
           "Active":true
        },
        {
           "ID":591,
           "DisplayName":"Dreyfus Gvt Cash Mgmt Fund-289 ETS- IB Ops 980160",
           "InternalValue":"Dreyfus Gvt Cash Mgmt Fund-289 ETS- IB Ops 980160",
           "Active":true
        },
        {
           "ID":592,
           "DisplayName":"ET Bank (1010) IB - 2019808639 USD",
           "InternalValue":"ET Bank (1010) IB - 2019808639 USD",
           "Active":true
        },
        {
           "ID":593,
           "DisplayName":"ET Bank (1010) IB - 2019809801 USD",
           "InternalValue":"ET Bank (1010) IB - 2019809801 USD",
           "Active":true
        },
        {
           "ID":594,
           "DisplayName":"ET Bank (1010) IB - 2019809942 USD",
           "InternalValue":"ET Bank (1010) IB - 2019809942 USD",
           "Active":true
        },
        {
           "ID":595,
           "DisplayName":"ET Bank (1010) IB - 2019810551 USD",
           "InternalValue":"ET Bank (1010) IB - 2019810551 USD",
           "Active":true
        },
        {
           "ID":596,
           "DisplayName":"ET Bank (1010) IB - 2020425407 USD",
           "InternalValue":"ET Bank (1010) IB - 2020425407 USD",
           "Active":true
        },
        {
           "ID":597,
           "DisplayName":"ET Bank (1010) NI - 2008493211 USD (CheckDep)",
           "InternalValue":"ET Bank (1010) NI - 2008493211 USD (CheckDep)",
           "Active":true
        },
        {
           "ID":598,
           "DisplayName":"ET Bank (1010) NI - 2010099691 USD",
           "InternalValue":"ET Bank (1010) NI - 2010099691 USD",
           "Active":true
        },
        {
           "ID":599,
           "DisplayName":"ET Bank (1010) NI - 2013615071 USD",
           "InternalValue":"ET Bank (1010) NI - 2013615071 USD",
           "Active":true
        },
        {
           "ID":600,
           "DisplayName":"ET Bank (1010) NI - 2019891510 USD (ACH Clearing)",
           "InternalValue":"ET Bank (1010) NI - 2019891510 USD (ACH Clearing)",
           "Active":true
        },
        {
           "ID":601,
           "DisplayName":"ET Bank (1010) NI - 2023497445 USD",
           "InternalValue":"ET Bank (1010) NI - 2023497445 USD",
           "Active":true
        },
        {
           "ID":602,
           "DisplayName":"ET Bank (1010) NI - 2024248722 USD (Payroll)",
           "InternalValue":"ET Bank (1010) NI - 2024248722 USD (Payroll)",
           "Active":true
        },
        {
           "ID":603,
           "DisplayName":"ET Bank (1010) NI - 2025853959 USD",
           "InternalValue":"ET Bank (1010) NI - 2025853959 USD",
           "Active":true
        },
        {
           "ID":604,
           "DisplayName":"ET Bank (1010) NI - 30212691 USD",
           "InternalValue":"ET Bank (1010) NI - 30212691 USD",
           "Active":true
        },
        {
           "ID":605,
           "DisplayName":"ET Bank (1010) NI 2009529484 USD",
           "InternalValue":"ET Bank (1010) NI 2009529484 USD",
           "Active":true
        },
        {
           "ID":606,
           "DisplayName":"ET Bank (1010) NI 2009805678 USD (Inc. Wires)",
           "InternalValue":"ET Bank (1010) NI 2009805678 USD (Inc. Wires)",
           "Active":true
        },
        {
           "ID":607,
           "DisplayName":"ET Bank Deposit Returns NI USD",
           "InternalValue":"ET Bank Deposit Returns NI USD",
           "Active":true
        },
        {
           "ID":608,
           "DisplayName":"ET Bank NI 2008798841 USD",
           "InternalValue":"ET Bank NI 2008798841 USD",
           "Active":true
        },
        {
           "ID":609,
           "DisplayName":"ET Bank NI 2008798858 USD",
           "InternalValue":"ET Bank NI 2008798858 USD",
           "Active":true
        },
        {
           "ID":610,
           "DisplayName":"ET Bank NI 2009528619 USD",
           "InternalValue":"ET Bank NI 2009528619 USD",
           "Active":true
        },
        {
           "ID":611,
           "DisplayName":"ETB 2010381917 1010 NI USD",
           "InternalValue":"ETB 2010381917 1010 NI USD",
           "Active":true
        },
        {
           "ID":612,
           "DisplayName":"ETB 2023501329 1010 NI USD",
           "InternalValue":"ETB 2023501329 1010 NI USD",
           "Active":true
        },
        {
           "ID":613,
           "DisplayName":"ETB 2026019113 IB USD",
           "InternalValue":"ETB 2026019113 IB USD",
           "Active":true
        },
        {
           "ID":614,
           "DisplayName":"ETB 2026285268 1010 NI USD",
           "InternalValue":"ETB 2026285268 1010 NI USD",
           "Active":true
        },
        {
           "ID":615,
           "DisplayName":"ETB Check Deposit Clearing",
           "InternalValue":"ETB Check Deposit Clearing",
           "Active":true
        },
        {
           "ID":616,
           "DisplayName":"Federal Reserve - IB",
           "InternalValue":"Federal Reserve - IB",
           "Active":true
        },
        {
           "ID":617,
           "DisplayName":"FHLB Atlanta 8090300 IB USD",
           "InternalValue":"FHLB Atlanta 8090300 IB USD",
           "Active":true
        },
        {
           "ID":618,
           "DisplayName":"Fidelity Gvt Port Fund ETS- IB Ops 702965757-USD",
           "InternalValue":"Fidelity Gvt Port Fund ETS- IB Ops 702965757-USD",
           "Active":true
        },
        {
           "ID":619,
           "DisplayName":"Goldman Sachs Gvt. MMF - ETS(Branch 400)- IB Ops",
           "InternalValue":"Goldman Sachs Gvt. MMF - ETS(Branch 400)- IB Ops",
           "Active":true
        },
        {
           "ID":620,
           "DisplayName":"HSBC IB Govt Fund 2260836 USD",
           "InternalValue":"HSBC IB Govt Fund 2260836 USD",
           "Active":true
        },
        {
           "ID":621,
           "DisplayName":"JP Morgan IB Govt Fund 5028757 USD",
           "InternalValue":"JP Morgan IB Govt Fund 5028757 USD",
           "Active":true
        },
        {
           "ID":622,
           "DisplayName":"MS Gvt Inst ETS- IB Ops 740200068-USD",
           "InternalValue":"MS Gvt Inst ETS- IB Ops 740200068-USD",
           "Active":true
        },
        {
           "ID":623,
           "DisplayName":"Special Reserve Cash - BMO 2456226 IB USD",
           "InternalValue":"Special Reserve Cash - BMO 2456226 IB USD",
           "Active":true
        },
        {
           "ID":624,
           "DisplayName":"Special Reserve Cash - CIBC 3364089 IB USD",
           "InternalValue":"Special Reserve Cash - CIBC 3364089 IB USD",
           "Active":true
        },
        {
           "ID":625,
           "DisplayName":"Special Reserve Cash - Citizens Bank 1330245552 I",
           "InternalValue":"Special Reserve Cash - Citizens Bank 1330245552 I",
           "Active":true
        },
        {
           "ID":626,
           "DisplayName":"Special Reserve Cash - Customers Bank 8834468 IB",
           "InternalValue":"Special Reserve Cash - Customers Bank 8834468 IB",
           "Active":true
        },
        {
           "ID":627,
           "DisplayName":"Special Reserve Cash - Independent Bank 120013138",
           "InternalValue":"Special Reserve Cash - Independent Bank 120013138",
           "Active":true
        },
        {
           "ID":628,
           "DisplayName":"Special Reserve Cash - Peoples United Bank 650061",
           "InternalValue":"Special Reserve Cash - Peoples United Bank 650061",
           "Active":true
        },
        {
           "ID":629,
           "DisplayName":"Special Reserve Cash - Signature Bank 1502283703",
           "InternalValue":"Special Reserve Cash - Signature Bank 1502283703",
           "Active":true
        },
        {
           "ID":630,
           "DisplayName":"Special Reserve Cash - Texas Capital Bank 1514000",
           "InternalValue":"Special Reserve Cash - Texas Capital Bank 1514000",
           "Active":true
        },
        {
           "ID":631,
           "DisplayName":"Special Reserve Cash - Tri-State Capital Bank 012",
           "InternalValue":"Special Reserve Cash - Tri-State Capital Bank 012",
           "Active":true
        },
        {
           "ID":632,
           "DisplayName":"Special Reserve Cash - Western Alliance Bank 8079",
           "InternalValue":"Special Reserve Cash - Western Alliance Bank 8079",
           "Active":true
        },
        {
           "ID":633,
           "DisplayName":"Special Reserve Cash-Associated Bank 2223344298 I",
           "InternalValue":"Special Reserve Cash-Associated Bank 2223344298 I",
           "Active":true
        },
        {
           "ID":634,
           "DisplayName":"State Street Global Advisors MMF IB #3254461 USD",
           "InternalValue":"State Street Global Advisors MMF IB #3254461 USD",
           "Active":true
        },
        {
           "ID":635,
           "DisplayName":"UBS Preferred Fund 47 7376 IB USD",
           "InternalValue":"UBS Preferred Fund 47 7376 IB USD",
           "Active":true
        },
        {
           "ID":636,
           "DisplayName":"Wells E*TRADE Financial Corp P/R",
           "InternalValue":"Wells E*TRADE Financial Corp P/R",
           "Active":true
        },
        {
           "ID":637,
           "DisplayName":"Wells Fargo NI 4121809123",
           "InternalValue":"Wells Fargo NI 4121809123",
           "Active":true
        },
        {
           "ID":638,
           "DisplayName":"Wells Fargo NI FX Checks 4120925052 USD",
           "InternalValue":"Wells Fargo NI FX Checks 4120925052 USD",
           "Active":true
        },
        {
           "ID":639,
           "DisplayName":"Wells Fargo NI FX Outwires 4120875075 USD",
           "InternalValue":"Wells Fargo NI FX Outwires 4120875075 USD",
           "Active":true
        },
        {
           "ID":640,
           "DisplayName":"Wells Fargo Outwire NI 2000191004780 USD",
           "InternalValue":"Wells Fargo Outwire NI 2000191004780 USD",
           "Active":true
        },
        {
           "ID":641,
           "DisplayName":"Wells Fargo Outwire NI 2000191005420",
           "InternalValue":"Wells Fargo Outwire NI 2000191005420",
           "Active":true
        }
     ]
  },
  {
     "MappingColumnName":"SupplierID",
     "DisplayName":"Supplier",
     "Filtering":"false",
     "headerStyle":null,
     "cellStyle":"padding: 0",
     "Search":true,
     "Editable":null,
     "ScrnDisplay":true,
     "Type":"LOV",
     "Active":true,
     "ColumnOrder":16,
     "Options":[
        {
           "ID":642,
           "DisplayName":"LOC -  BMO Committed",
           "InternalValue":"LOC -  BMO Committed",
           "Active":true
        },
        {
           "ID":643,
           "DisplayName":"LOC - BANK OF AMERICA",
           "InternalValue":"LOC - BANK OF AMERICA",
           "Active":true
        },
        {
           "ID":644,
           "DisplayName":"LOC - Bank of New York",
           "InternalValue":"LOC - Bank of New York",
           "Active":true
        },
        {
           "ID":645,
           "DisplayName":"LOC - BMO",
           "InternalValue":"LOC - BMO",
           "Active":true
        },
        {
           "ID":646,
           "DisplayName":"LOC - BMO Committed",
           "InternalValue":"LOC - BMO Committed",
           "Active":true
        },
        {
           "ID":647,
           "DisplayName":"LOC - BMO Harris Bank",
           "InternalValue":"LOC - BMO Harris Bank",
           "Active":true
        },
        {
           "ID":648,
           "DisplayName":"LOC - BNP Paribas",
           "InternalValue":"LOC - BNP Paribas",
           "Active":true
        },
        {
           "ID":649,
           "DisplayName":"LOC - BNP Paribas Secured",
           "InternalValue":"LOC - BNP Paribas Secured",
           "Active":true
        },
        {
           "ID":650,
           "DisplayName":"LOC - BONY",
           "InternalValue":"LOC - BONY",
           "Active":true
        },
        {
           "ID":651,
           "DisplayName":"LOC - Capital One Bank",
           "InternalValue":"LOC - Capital One Bank",
           "Active":true
        },
        {
           "ID":652,
           "DisplayName":"LOC - JPM",
           "InternalValue":"LOC - JPM",
           "Active":true
        },
        {
           "ID":653,
           "DisplayName":"LOC - JPM Revolver",
           "InternalValue":"LOC - JPM Revolver",
           "Active":true
        },
        {
           "ID":654,
           "DisplayName":"LOC - JPM Revolver (ETS)",
           "InternalValue":"LOC - JPM Revolver (ETS)",
           "Active":true
        },
        {
           "ID":655,
           "DisplayName":"LOC - JPMorgan Chase Bank",
           "InternalValue":"LOC - JPMorgan Chase Bank",
           "Active":true
        },
        {
           "ID":656,
           "DisplayName":"LOC - US Bank",
           "InternalValue":"LOC - US Bank",
           "Active":true
        },
        {
           "ID":657,
           "DisplayName":"LOC - USBank",
           "InternalValue":"LOC - USBank",
           "Active":true
        },
        {
           "ID":658,
           "DisplayName":"LOC - Wells Fargo",
           "InternalValue":"LOC - Wells Fargo",
           "Active":true
        },
        {
           "ID":659,
           "DisplayName":"LOC - Wells Fargo Bank",
           "InternalValue":"LOC - Wells Fargo Bank",
           "Active":true
        }
     ]
  },
  {
     "MappingColumnName":"IntercompanyID",
     "DisplayName":"Intercompany",
     "Filtering":"false",
     "headerStyle":null,
     "cellStyle":"padding: 0",
     "Search":true,
     "Editable":null,
     "ScrnDisplay":true,
     "Type":"LOV",
     "Active":true,
     "ColumnOrder":17,
     "Options":null
  },
  {
     "MappingColumnName":"CashFlowID",
     "DisplayName":"Cash Flow",
     "Filtering":"false",
     "headerStyle":null,
     "cellStyle":"padding: 0",
     "Search":true,
     "Editable":null,
     "ScrnDisplay":true,
     "Type":"LOV",
     "Active":true,
     "ColumnOrder":18,
     "Options":null
  },
  {
     "MappingColumnName":"LineofBusinessID",
     "DisplayName":"Line of Business",
     "Filtering":"false",
     "headerStyle":null,
     "cellStyle":"padding: 0",
     "Search":true,
     "Editable":null,
     "ScrnDisplay":true,
     "Type":"LOV",
     "Active":true,
     "ColumnOrder":19,
     "Options":null
  },
  {
     "MappingColumnName":"ProjectID",
     "DisplayName":"Project",
     "Filtering":"false",
     "headerStyle":null,
     "cellStyle":"padding: 0",
     "Search":true,
     "Editable":null,
     "ScrnDisplay":true,
     "Type":"LOV",
     "Active":true,
     "ColumnOrder":20,
     "Options":[
        {
           "ID":672,
           "DisplayName":"BLANK",
           "InternalValue":"BLANKProj",
           "Active":true
        }
     ]
  },
  {
     "MappingColumnName":"CustomerID",
     "DisplayName":"Customer",
     "Filtering":"false",
     "headerStyle":null,
     "cellStyle":"padding: 0",
     "Search":true,
     "Editable":null,
     "ScrnDisplay":true,
     "Type":"LOV",
     "Active":true,
     "ColumnOrder":21,
     "Options":[
        {
           "ID":673,
           "DisplayName":"BLANK",
           "InternalValue":"BLANKCustomer",
           "Active":true
        }
     ]
  },
  {
     "MappingColumnName":"SalesItemsID",
     "DisplayName":"Sales Items",
     "Filtering":"false",
     "headerStyle":null,
     "cellStyle":"padding: 0",
     "Search":true,
     "Editable":null,
     "ScrnDisplay":true,
     "Type":"LOV",
     "Active":true,
     "ColumnOrder":22,
     "Options":[
        {
           "ID":674,
           "DisplayName":"BLANK",
           "InternalValue":"BLANKSalesItems",
           "Active":true
        }
     ]
  },
  {
     "MappingColumnName":"TaxCategoryID",
     "DisplayName":"Tax Category",
     "Filtering":"false",
     "headerStyle":null,
     "cellStyle":"padding: 0",
     "Search":true,
     "Editable":null,
     "ScrnDisplay":true,
     "Type":"LOV",
     "Active":true,
     "ColumnOrder":23,
     "Options":[
        {
           "ID":675,
           "DisplayName":"BLANK",
           "InternalValue":"BLANKTaxCat",
           "Active":true
        }
     ]
  },
  {
     "MappingColumnName":"TaxAuthorityID",
     "DisplayName":"Tax Authority",
     "Filtering":"false",
     "headerStyle":null,
     "cellStyle":"padding: 0",
     "Search":true,
     "Editable":null,
     "ScrnDisplay":true,
     "Type":"LOV",
     "Active":true,
     "ColumnOrder":24,
     "Options":[
        {
           "ID":676,
           "DisplayName":"BLANK",
           "InternalValue":"BLANKTaxAuth",
           "Active":true
        }
     ]
  },
  {
     "MappingColumnName":"\"ICOAffiliateID \t\"",
     "DisplayName":"\"ICO Affiliate \t\"",
     "Filtering":"false",
     "headerStyle":null,
     "cellStyle":"padding: 0",
     "Search":true,
     "Editable":null,
     "ScrnDisplay":true,
     "Type":"LOV",
     "Active":true,
     "ColumnOrder":25,
     "Options":null
  },
  {
     "MappingColumnName":"Justification",
     "DisplayName":"Justification",
     "Filtering":"false",
     "headerStyle":null,
     "cellStyle":"padding: 0",
     "Search":true,
     "Editable":null,
     "ScrnDisplay":true,
     "Type":"TEXT",
     "Active":true,
     "ColumnOrder":26,
     "Options":null
  },
  {
     "MappingColumnName":"\"CreatedDate \t\"",
     "DisplayName":"Created Date",
     "Filtering":"false",
     "headerStyle":null,
     "cellStyle":"padding: 0",
     "Search":true,
     "Editable":"never",
     "ScrnDisplay":true,
     "Type":"DateTime",
     "Active":true,
     "ColumnOrder":27,
     "Options":null
  },
  {
     "MappingColumnName":"CreatedBy",
     "DisplayName":"Created By",
     "Filtering":"false",
     "headerStyle":null,
     "cellStyle":"padding: 0",
     "Search":true,
     "Editable":"never",
     "ScrnDisplay":true,
     "Type":"TEXT",
     "Active":true,
     "ColumnOrder":28,
     "Options":null
  },
  {
     "MappingColumnName":"UpdatedDate",
     "DisplayName":"Updated Date",
     "Filtering":"false",
     "headerStyle":null,
     "cellStyle":"padding: 0",
     "Search":true,
     "Editable":"never",
     "ScrnDisplay":true,
     "Type":"DateTime",
     "Active":true,
     "ColumnOrder":29,
     "Options":null
  },
  {
     "MappingColumnName":"\"UpdatedBy \t\"",
     "DisplayName":"Updated By",
     "Filtering":"false",
     "headerStyle":null,
     "cellStyle":"padding: 0",
     "Search":true,
     "Editable":"never",
     "ScrnDisplay":true,
     "Type":"TEXT",
     "Active":true,
     "ColumnOrder":30,
     "Options":null
  },
  {
     "MappingColumnName":"Worktag1ID",
     "DisplayName":"Worktag1ID",
     "Filtering":"false",
     "headerStyle":null,
     "cellStyle":"padding: 0",
     "Search":false,
     "Editable":null,
     "ScrnDisplay":false,
     "Type":null,
     "Active":false,
     "ColumnOrder":31,
     "Options":null
  },
  {
     "MappingColumnName":"Worktag2ID",
     "DisplayName":"Worktag2ID",
     "Filtering":"false",
     "headerStyle":null,
     "cellStyle":"padding: 0",
     "Search":false,
     "Editable":null,
     "ScrnDisplay":false,
     "Type":null,
     "Active":false,
     "ColumnOrder":32,
     "Options":null
  },
  {
     "MappingColumnName":"Worktag3ID",
     "DisplayName":"Worktag3ID",
     "Filtering":"false",
     "headerStyle":null,
     "cellStyle":"padding: 0",
     "Search":false,
     "Editable":null,
     "ScrnDisplay":false,
     "Type":null,
     "Active":false,
     "ColumnOrder":33,
     "Options":null
  },
  {
     "MappingColumnName":"Worktag4ID",
     "DisplayName":"Worktag4ID",
     "Filtering":"false",
     "headerStyle":null,
     "cellStyle":"padding: 0",
     "Search":false,
     "Editable":null,
     "ScrnDisplay":false,
     "Type":null,
     "Active":false,
     "ColumnOrder":34,
     "Options":null
  },
  {
     "MappingColumnName":"Worktag5ID",
     "DisplayName":"Worktag5ID",
     "Filtering":"false",
     "headerStyle":null,
     "cellStyle":"padding: 0",
     "Search":false,
     "Editable":null,
     "ScrnDisplay":false,
     "Type":null,
     "Active":false,
     "ColumnOrder":35,
     "Options":null
  },
  {
     "MappingColumnName":"Worktag6ID",
     "DisplayName":"Worktag6ID",
     "Filtering":"false",
     "headerStyle":null,
     "cellStyle":"padding: 0",
     "Search":false,
     "Editable":null,
     "ScrnDisplay":false,
     "Type":null,
     "Active":false,
     "ColumnOrder":36,
     "Options":null
  },
  {
     "MappingColumnName":"Worktag7ID",
     "DisplayName":"Worktag7ID",
     "Filtering":"false",
     "headerStyle":null,
     "cellStyle":"padding: 0",
     "Search":false,
     "Editable":null,
     "ScrnDisplay":false,
     "Type":null,
     "Active":false,
     "ColumnOrder":37,
     "Options":null
  },
  {
     "MappingColumnName":"Worktag8ID",
     "DisplayName":"Worktag8ID",
     "Filtering":"false",
     "headerStyle":null,
     "cellStyle":"padding: 0",
     "Search":false,
     "Editable":null,
     "ScrnDisplay":false,
     "Type":null,
     "Active":false,
     "ColumnOrder":38,
     "Options":null
  },
  {
     "MappingColumnName":"Worktag9ID",
     "DisplayName":"Worktag9ID",
     "Filtering":"false",
     "headerStyle":null,
     "cellStyle":"padding: 0",
     "Search":false,
     "Editable":null,
     "ScrnDisplay":false,
     "Type":null,
     "Active":false,
     "ColumnOrder":39,
     "Options":null
  },
  {
     "MappingColumnName":"Worktag10ID",
     "DisplayName":"Worktag10ID",
     "Filtering":"false",
     "headerStyle":null,
     "cellStyle":"padding: 0",
     "Search":false,
     "Editable":null,
     "ScrnDisplay":false,
     "Type":null,
     "Active":false,
     "ColumnOrder":40,
     "Options":null
  }
]

export default data
