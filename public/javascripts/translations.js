I18n.translations || (I18n.translations = {});
I18n.translations["en"] = I18n.extend((I18n.translations["en"] || {}), {"account_exist":"Have an account?","activerecord":{"errors":{"messages":{"record_invalid":"Validation failed: %{errors}","restrict_dependent_destroy":{"has_many":"Cannot delete record because dependent %{record} exist","has_one":"Cannot delete record because a dependent %{record} exists"}},"models":{"user":{"attributes":{"email":{"blank":"Can not be blank"},"password":{"blank":"Can not be blank"}}}}}},"admin":{"booked":{"booked_date":"Booked date","customer":"Customer phone","num_seat":"Num of seat","price":"Price","seat":"Seat","stt":"Index","type":"Type of seat"},"error":{"invalid_schedule":"Invalid schedule!","invalid_user":"Invalid user!"},"layout":{"footer":"footer","go_home":" Go home","haeder_title":"Manage Page","header":"Toggle navigation","hi_admin":"Hi admin","home":"Admin home","profile":"Profile","search":"Search ..."},"model_bus":{"create_frame":"Create frame","create_model":"Create model","horizontal":"Horizontal line","new":"Create New Model Bus","not_enough_seats":"Not enough seats","number_of_floors":"Number of floors","number_of_seats":"Number of seats","out_of_seat":"Out of seat","remain-seats":"Remain seats","vertical":"Vertical line"},"n":"Not yet!","schedule":{"add":" Add","add_schedule":"Add schedule","back":"Back","create":{"back":"Back","description":"Description","interval":"Select interval","next":"Next","no_bus":"Have not bus is suitable for this time and date!","price":"Price (vnd)","schedule_existed":"This schedule is already exist!","select_bus":"Select bus","select_date":"Select date","select_destination":"Select pick address destination","select_origin":"Select pick address origin","select_road":"Select road","select_route":"Select route","select_sth":"Select something","step1":"Step 1","step2":"Step 2","step_final":"Step final","submit":"Submit form","time_during":"Select time during","time_start":"Select time start"},"detail":" Detail","edit":" Edit","filter":"Filter  ","filter_by_interval":"Filter by interval","filter_by_road":"Filter by road","filter_by_routes":"Filter by route","list_schedule":"List schedules","show":{"at":"at: ","bus":"Bus name: ","destination":"DESTINATION","detail_seated":"Detail seated","location":"Location: ","number_seat":"Number of seat now: ","number_seated":"Number of seated: ","origin":"ORIGIN","pick_address_destination":"Pick address destination: ","pick_address_origin":"Pick address origin: ","title":"Schedule detail: "},"status":{"doing":"DOING","done":"DONE","now":"NOW","will_do":"IN THE FUTURE"},"table":{"action":"action","date":"Date","destination":"Destination","hour":" hour","origin":"Origin","price":"Price (vnd)","stt":"Index","stts":"Status","time_during":"Time during","time_end":"Time end","time_start":"Time start"},"title":"Schedules"},"sidebar":{"addBus":"Add Bus","addModel":"Add Model","addSchedule":"Add schedule","bus":"Manage Bus","dashboard":"Dashboard","model":"Manage Model","schedule":"Manage schedule","showBus":"Show list bus","showModel":"Show list model","showSchedule":"Show list schedule","statistic":"Statistics","statisticPassenger":"Statistics passenger","statisticPassengerByRoute":"Statistics passenger by route","statisticPassengerByTime":"Statistics passenger by time","statisticRevenueByRoute":"Revenue statistics by route","statisticRevenueByTime":"Revenue statistics by time","statisticSchedule":"Statistics schedule"},"statistic":{"by_months":"By months","by_years":"By years","select_type":"Select type","select_types":"Select type time for statistic","select_year":"Select year","time":"Times","total_revenue":"Sum of revenue"},"stt":{"now":"NOW","will_do":"IN THE FUTURE"},"success":{"create_success":"Create success!"},"y":"Paymented!"},"afternoon":"Afternoon (12h-19h)","agree-rule":"I agree with the rules of","app_name":"Ticket Booking","booked-seat":"Booked seat","booking-history":"Booking history","confirm_booking":"Confirm booking","contact":"Contact","continue":"Continue","coupon-code":"Coupon code","date":{"abbr_day_names":["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],"abbr_month_names":[null,"Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],"day_names":["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],"formats":{"date_month_year_concise":"%d-%m-%Y","default":"%Y-%m-%d","long":"%B %d, %Y","short":"%b %d"},"month_names":[null,"January","February","March","April","May","June","July","August","September","October","November","December"],"order":["year","month","day"]},"date_of_department":"Date of department","datetime":{"distance_in_words":{"about_x_hours":{"one":"about 1 hour","other":"about %{count} hours"},"about_x_months":{"one":"about 1 month","other":"about %{count} months"},"about_x_years":{"one":"about 1 year","other":"about %{count} years"},"almost_x_years":{"one":"almost 1 year","other":"almost %{count} years"},"half_a_minute":"half a minute","less_than_x_minutes":{"one":"less than a minute","other":"less than %{count} minutes"},"less_than_x_seconds":{"one":"less than 1 second","other":"less than %{count} seconds"},"over_x_years":{"one":"over 1 year","other":"over %{count} years"},"x_days":{"one":"1 day","other":"%{count} days"},"x_minutes":{"one":"1 minute","other":"%{count} minutes"},"x_months":{"one":"1 month","other":"%{count} months"},"x_seconds":{"one":"1 second","other":"%{count} seconds"}},"prompts":{"day":"Day","hour":"Hour","minute":"Minute","month":"Month","second":"Seconds","year":"Year"}},"destination_address":"Destination address","devise":{"confirmations":{"confirmed":"Your email address has been successfully confirmed.","send_instructions":"You will receive an email with instructions for how to confirm your email address in a few minutes.","send_paranoid_instructions":"If your email address exists in our database, you will receive an email with instructions for how to confirm your email address in a few minutes."},"failure":{"already_authenticated":"You are already signed in.","inactive":"Your account is not activated yet.","invalid":"Invalid %{authentication_keys} or password.","last_attempt":"You have one more attempt before your account is locked.","locked":"Your account is locked.","not_found_in_database":"Invalid %{authentication_keys} or password.","timeout":"Your session expired. Please sign in again to continue.","unauthenticated":"You need to sign in or sign up before continuing.","unconfirmed":"You have to confirm your email address before continuing.","user":{"not_found_in_database":"Account dont exist"}},"mailer":{"confirmation_instructions":{"subject":"Confirmation instructions"},"email_changed":{"subject":"Email Changed"},"password_change":{"subject":"Password Changed"},"reset_password_instructions":{"subject":"Reset password instructions"},"unlock_instructions":{"subject":"Unlock instructions"}},"omniauth_callbacks":{"failure":"Could not authenticate you from %{kind} because \"%{reason}\".","success":"Successfully authenticated from %{kind} account."},"passwords":{"no_token":"You can't access this page without coming from a password reset email. If you do come from a password reset email, please make sure you used the full URL provided.","send_instructions":"You will receive an email with instructions on how to reset your password in a few minutes.","send_paranoid_instructions":"If your email address exists in our database, you will receive a password recovery link at your email address in a few minutes.","updated":"Your password has been changed successfully. You are now signed in.","updated_not_active":"Your password has been changed successfully."},"registrations":{"destroyed":"Bye! Your account has been successfully cancelled. We hope to see you again soon.","signed_up":"Welcome! You have signed up successfully.","signed_up_but_inactive":"You have signed up successfully. However, we could not sign you in because your account is not yet activated.","signed_up_but_locked":"You have signed up successfully. However, we could not sign you in because your account is locked.","signed_up_but_unconfirmed":"A message with a confirmation link has been sent to your email address. Please follow the link to activate your account.","update_needs_confirmation":"You updated your account successfully, but we need to verify your new email address. Please check your email and follow the confirm link to confirm your new email address.","updated":"Your account has been updated successfully.","user":{"signed_up":"Signed up successful"}},"sessions":{"already_signed_out":"Signed out successfully.","signed_in":"Signed in successfully.","signed_out":"Signed out successfully.","user":{"already_signed_out":"Already signed out","signed_in":"Login successful","signed_out":"Signed out successful"}},"unlocks":{"send_instructions":"You will receive an email with instructions for how to unlock your account in a few minutes.","send_paranoid_instructions":"If your account exists, you will receive an email with instructions for how to unlock it in a few minutes.","unlocked":"Your account has been unlocked successfully. Please sign in to continue."}},"email":"Email","errors":{"array?":"must be an array","attr?":"is missing","bool?":"must be boolean","connection_refused":"Oops! Failed to connect to the Web Console middleware.\nPlease make sure a rails development server is running.\n","date?":"must be a date","date_time?":"must be a date time","decimal?":"must be a decimal","empty?":"must be empty","eql?":"must be equal to %{left}","even?":"must be even","excluded_from?":{"arg":{"default":"must not be one of: %{list}","range":"must not be one of: %{list_left} - %{list_right}"}},"excludes?":"must not include %{value}","exclusion?":"must not be one of: %{list}","false?":"must be false","filled?":"must be filled","float?":"must be a float","format":"%{attribute} %{message}","format?":"is in invalid format","gt?":"must be greater than %{num}","gteq?":"must be greater than or equal to %{num}","hash?":"must be a hash","included_in?":{"arg":{"default":"must be one of: %{list}","range":"must be one of: %{list_left} - %{list_right}"}},"includes?":"must include %{value}","inclusion?":"must be one of: %{list}","int?":"must be an integer","key?":"is missing","lt?":"must be less than %{num}","lteq?":"must be less than or equal to %{num}","max_size?":"size cannot be greater than %{num}","messages":{"accepted":"must be accepted","already_confirmed":"was already confirmed, please try signing in","blank":"can't be blank","confirmation":"doesn't match %{attribute}","confirmation_period_expired":"needs to be confirmed within %{period}, please request a new one","empty":"can't be empty","equal_to":"must be equal to %{count}","even":"must be even","exclusion":"is reserved","expired":"has expired, please request a new one","greater_than":"must be greater than %{count}","greater_than_or_equal_to":"must be greater than or equal to %{count}","inclusion":"is not included in the list","invalid":"is invalid","less_than":"must be less than %{count}","less_than_or_equal_to":"must be less than or equal to %{count}","model_invalid":"Validation failed: %{errors}","not_a_number":"is not a number","not_an_integer":"must be an integer","not_found":"not found","not_locked":"was not locked","not_saved":"Can not be saved","odd":"must be odd","other_than":"must be other than %{count}","present":"must be blank","required":"must exist","taken":"has already been taken","too_long":{"one":"is too long (maximum is 1 character)","other":"is too long (maximum is %{count} characters)"},"too_short":{"one":"is too short (minimum is 1 character)","other":"is too short (minimum is %{count} characters)"},"wrong_length":{"one":"is the wrong length (should be 1 character)","other":"is the wrong length (should be %{count} characters)"}},"min_size?":"size cannot be less than %{num}","none?":"cannot be defined","not_eql?":"must not be equal to %{left}","number?":"must be a number","odd?":"must be odd","or":"or","size?":{"arg":{"default":"size must be %{size}","range":"size must be within %{size_left} - %{size_right}"},"value":{"string":{"arg":{"default":"length must be %{size}","range":"length must be within %{size_left} - %{size_right}"}}}},"str?":"must be a string","time?":"must be a time","true?":"must be true","type?":"must be %{type}","unacceptable_request":"A supported version is expected in the Accept header.\n","unavailable_session":"Session %{id} is no longer available in memory.\n\nIf you happen to run on a multi-process server (like Unicorn or Puma) the process\nthis request hit doesn't store %{id} in memory. Consider turning the number of\nprocesses/workers to one (1) or using a different server in development.\n"},"fillout-info-title":"Quý khách vui lòng điền chính xác điện thoại, họ tên, email(nếu có) của hành khách đi xe","final-point":"Final station","flash":{"actions":{"create":{"notice":"%{resource_name} was successfully created."},"destroy":{"alert":"%{resource_name} could not be destroyed.","notice":"%{resource_name} was successfully destroyed."},"update":{"notice":"%{resource_name} was successfully updated."}}},"floor":"Floor","floor_1":"1st floor","floor_2":"2nd floor","footer_title_left":"Booking system online","footer_title_right":"Senior passenger car company","forget_password":"Forget password?","fullname":"Fullname","guide":"Guide","have-to-pay":"Have to pay","helpers":{"select":{"prompt":"Please select"},"submit":{"create":"Create %{model}","submit":"Save %{model}","update":"Update %{model}"}},"home_page":"Home","hour":"h","how-to-select-seats":"Click to select a seat and click again to deselect","interval":"Interval","js":{"date":{"formats":{"date_month_year":"mm/dd/yyyy"}}},"list-of-seat":"List of seats","login":"Login","logout":"Logout","manage_pages":"Manage pages","morning":"Morning (0h-12h)","night":"Night (19h-24h)","note":"Note","number":{"currency":{"format":{"delimiter":",","format":"%u%n","precision":2,"separator":".","significant":false,"strip_insignificant_zeros":false,"unit":"$"}},"format":{"delimiter":",","precision":3,"separator":".","significant":false,"strip_insignificant_zeros":false},"human":{"decimal_units":{"format":"%n %u","units":{"billion":"Billion","million":"Million","quadrillion":"Quadrillion","thousand":"Thousand","trillion":"Trillion","unit":""}},"format":{"delimiter":"","precision":3,"significant":true,"strip_insignificant_zeros":true},"storage_units":{"format":"%n %u","units":{"byte":{"one":"Byte","other":"Bytes"},"eb":"EB","gb":"GB","kb":"KB","mb":"MB","pb":"PB","tb":"TB"}}},"percentage":{"format":{"delimiter":"","format":"%n%"}},"precision":{"format":{"delimiter":""}}},"origin_address":"Origin address","password":"Password","password_confirmation":"Password confirmation","password_retrieval":"Password retrieval","payment":"Payment","payment-by-card":"Payment by card","phone-number":"Phone number","postpaid":"Postpaid","remember_me":"Remember me","route":{"route1":"Quốc lộ 1","route2":"Đường Hồ Chí Minh"},"routes":"Routes","search":"Search","select-destination-address":"Select destination address","select-interval":"Select interval","select-origin-address":"Select origin address","selected-seat":"Selected seat","signup":"Sign up","start-point":"Start station","start-time":"Start time","support":{"array":{"last_word_connector":", and ","two_words_connector":" and ","words_connector":", "}},"take-hour":"Take","time":{"am":"am","formats":{"default":"%a, %d %b %Y %H:%M:%S %z","long":"%B %d, %Y %H:%M","short":"%d %b %H:%M"},"pm":"pm"},"title":"Book car tickets online","total-price":"Total price","unbooked-seat":"Unbooked seat","unselected-seat":"Unselected seat","user":{"history":{"table":{"bill_id":"Bill ID","date":"Date","destination":"Destination","detail":"Detail","origin":"Origin","stt":"Index","time_start":"Time start","total":"Total (vnd)"}},"user_email":"User's email","user_history":"User's history","user_info":"User's information","user_phone":"User's phone number"},"user-profile":"User profile"});
I18n.translations["vi"] = I18n.extend((I18n.translations["vi"] || {}), {"account_exist":"Có tài khoản?","activerecord":{"errors":{"models":{"bill":{"save":"Hệ thống đã xảy ra lỗi"},"user":{"attributes":{"email":{"blank":"Không được để trống"},"password":{"blank":"Không được để trống"}}}}}},"admin":{"booked":{"booked_date":"Ngày đặt chỗ","customer":"SĐT Khách hàng","num_seat":"Số lượng","price":"Giá vé ghế","seat":"Ghế","stt":"STT","type":"Loại ghế"},"error":{"invalid_schedule":"Không tìm thấy lịch trình!","invalid_user":"Không tìm thấy người dùng!"},"layout":{"footer":"footer","go_home":" Trở về trang chủ","haeder_title":"Trang quản lý","header":"Toggle navigation","hi_admin":"Chào admin","home":"Trang chủ","profile":"thông tin","search":"Tìm kiếm ..."},"model_bus":{"create_frame":"Tạo khung","create_model":"Tạo mô hình","horizontal":"Hàng ngang","new":"Tạo mô hình xe mới","not_enough_seats":"Không đủ ghế","number_of_floors":"Số tầng","number_of_seats":"Số lượng ghế","out_of_seat":"Hết chỗ","remain-seats":"Số ghế còn lại","vertical":"Hàng dọc"},"n":"Chưa thanh toán!","schedule":{"add":" Thêm","add_schedule":"Add schedule","back":" Trở về","create":{"back":"Quay lại","description":"Mô tả thêm","interval":"Chọn khung giờ xuất phát","next":"Tiếp tục","no_bus":"Không có xe nào còn trống trong khung giờ này!","price":"Giá vé (vnd)","schedule_existed":"Lịch trình này đã tồn tại! Chọn lại khung giờ khác","select_bus":"Chọn xe cho chuyến đi","select_date":"Chọn ngày đi","select_destination":"Chọn điểm xuống","select_origin":"Chọn điểm lên","select_road":"Chọn cung đường đi","select_route":"Chọn tuyến đường đi","select_sth":"Chọn","step1":"Step 1","step2":"Step 2","step_final":"Step final","submit":"Submit form","time_during":"Thời gian đi","time_start":"Thời gian xuất phát"},"detail":" Chi tiết","edit":" Sửa","filter":"Lọc  ","filter_by_interval":"Lọc theo khung giờ","filter_by_road":"Lọc theo cung đường","filter_by_routes":"Lọc theo chặng đường","list_schedule":"Danh sách lịch trình xe ","show":{"at":"Lúc: ","bus":"Tên xe ô tô: ","destination":"ĐIỂM CUỐI","detail_seated":"(Xem)","location":"Tại: ","number_seat":"Số ghế còn lại: ","number_seated":"Số ghế đã đặt: ","origin":"ĐIỂM ĐẦU","pick_address_destination":"ĐIểm trả: ","pick_address_origin":"ĐIểm đón: ","title":"Thông tin chuyến đi:"},"status":{"doing":"Sắp đi/Đang đi","done":"ĐÃ ĐI!","now":"ĐANG ĐI","will_do":"SẮP ĐI"},"table":{"action":"Thao tác","date":"Ngày đi","destination":"Bến đến","hour":" tiếng","origin":"Bến đi","price":"Giá (vnd)","stt":"STT","stts":"Trạng thái","time_during":"Thời gian đi","time_end":"Giờ đến","time_start":"Giờ đi"},"title":"Lịch trình"},"sidebar":{"addBus":"Thêm xe","addModel":"Thêm mô hình","addSchedule":"Thêm lịch trình","bus":"Quản lý xe","dashboard":"Bảng điều khiển","model":"Quản lý mô hình","schedule":"Quản lý lịch trình","showBus":"Danh sách xe","showModel":"Danh sách mô hình","showSchedule":"Danh sách các lịch trình","statistic":"Thống kê","statisticPassenger":"Thống kê khách hàng","statisticPassengerByRoute":"Thống kê khách hàng theo tuyến đường","statisticPassengerByTime":"Thống kê khách hàng theo thời gian","statisticRevenueByRoute":"Thống kê doanh thu theo tuyến đường","statisticRevenueByTime":"Thống kê doanh thu theo thời gian","statisticSchedule":"Thống kê lịch trình"},"statistic":{"by_months":"Theo các tháng","by_years":"Theo các năm","select_type":"Chọn loại","select_types":"Chọn thống kê theo","select_year":"Chọn năm","time":"Thời gian","total_revenue":"Tổng doanh thu"},"stt":{"now":"ĐANG ĐI","will_do":"SẮP ĐI"},"success":{"create_success":"Thêm thành công!"},"y":"Đã thanh toán!"},"afternoon":"Chiều (12h-19h)","agree-rule":"Tôi đồng ý với quy định của","app_name":"Đặt vé xe","bill_mailer":{"booked_successfully":{"subject":"Đặt vé thành công"},"greeting":"Xin chào","introduction":"Xác nhận đặt vé thành công"},"booked-seat":"Ghế đã đặt","booking":"Đặt vé","booking-history":"Lịch sử đặt vé","close":"Đóng","confirm_booking":"Xác nhận mua vé","contact":"Liên hệ","continue":"Tiếp tục","coupon-code":"Mã giảm giá","date":{"formats":{"date_month_year_concise":"%d/%m/%Y","default":"%Y/%m/%d","long":"%B %d, %Y","short":"%b %d"}},"date_of_department":"Ngày đi","day":"ngày","destination_address":"Điểm kết thúc","detail":"Chi tiết","devise":{"failure":{"user":{"not_found_in_database":"Không tìm thấy người dùng","unauthenticated":"Bạn phải đăng nhập trước"}},"registrations":{"user":{"signed_up":"Đăng kí thành công"}},"sessions":{"user":{"already_signed_out":"Bạn đã đăng xuất","signed_in":"Đăng nhập thành công","signed_out":"Đăng xuất"}}},"email":"Email","errors":{"messages":{"not_saved":"Không thể lưu"}},"fillout-info-title":"Quý khách vui lòng điền chính xác điện thoại, họ tên, email(nếu có) của hành khách đi xe","final-point":"Bến đến","floor":"Tầng","floor_1":"Tầng 1","floor_2":"Tầng 2","footer_title_left":"Hệ thống đặt vé trực tuyến","footer_title_right":"Công ty cổ phần xe khách cao cấp","forget_password":"Quên mật khẩu","fullname":"Họ tên","guide":"Hướng dẫn","have-to-pay":"Phải thanh toán","home_page":"Trang chủ","hour":"giờ","hours":"giờ","how-to-select-seats":"Bấm vào ghế để chọn hoặc bỏ chọn","interval":"Khung giờ","js":{"date":{"formats":{"date_month_year":"dd/mm/yyyy"}}},"list-of-seat":"Số ghế","login":"Đăng nhập","logout":"Đăng xuất","manage_pages":"Quản lý trang","message":{"booking":{"successfully":"Đặt vé thành công. Vui lòng kiểm tra email của bạn","unsuccessfully":"Đặt vé không thành công."},"create_model_bus":{"successfully":"Tạo mô hình xe thành công","unsuccessfully":"Tạo mô hình xe không thành công"}},"morning":"Sáng (0h-12h)","night":"Tối (19h-24h)","no_data":"Không có dữ liệu","note":"Lưu ý","notification":"Thông báo đặt vé","number":{"currency":{"format":{"format":"%n %u","unit":"VND"}}},"origin_address":"Điểm bắt đầu","password":"Mật khẩu","password_confirmation":"Nhập lại mật khẩu","password_retrieval":"Lấy lại mật khẩu","payment":"Thanh toán","payment-by-card":"Thanh toán bằng thẻ","phone-number":"Số điện thoại","policy_one":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do","postpaid":"Trả sau","profile":"Thông tin người dùng","remain":"Còn","remember_me":"Lưu tài khoản","route":{"route1":"Quốc lộ 1","route2":"Đường Hồ Chí Minh"},"routes":"Cung đường","search":"Tìm kiếm","select-date":"Chọn ngày","select-destination-address":"Chọn điểm đến","select-interval":"Chọn khung giờ","select-origin-address":"Chọn điểm bắt đầu","select-seat":"Chọn chỗ","selected-seat":"Ghế đã chọn","signup":"Đăng ký","signup_title":"Đăng ký tài khoản miễn phí","slot":"chỗ","start-point":"Bến đi","start-time":"Giờ chạy","take-hour":"Thời gian","time":{"formats":{"time_hour":"%H:%M"}},"title":"Mua vé xe trực tuyến","total-price":"Tổng tiền","unbooked-seat":"Ghế chưa đặt","unselected-seat":"Ghế chưa chọn","user":{"history":{"table":{"bill_id":"Mã hóa đơn","date":"Ngày đi","destination":"Bến đến","detail":"Chi tiết","origin":"Bến đi","stt":"STT","time_start":"Giờ đi","total":"Tổng tiền (vnd)"}},"user_email":"Email","user_history":"Lịch sử người dùng","user_info":"Thông tin người dùng","user_phone":"Số điện thoại"}});
