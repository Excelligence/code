import smtplib
def sendMail(email,password,message):
    server=smtplib.SMTP("smtp.mail.com",587)
    server.starttls()
    server.login(email,password)
    server.sendmail(email,email,message)
    server.quit()
    return


