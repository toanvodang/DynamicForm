const ZhCn = {
    name: 'zh-cn',
    form: {
        field: 'Trường',
        title: 'Tiêu đề',
        info: 'Thông tin',
        control: 'Điều khiển',
        labelPosition: 'Vị trí nhãn',
        labelStyle: 'Kiểu nhãn',
        labelSuffix: 'Hậu tố nhãn',
        size: 'Kích thước biểu mẫu',
        event: 'Sự kiện biểu mẫu',
        labelWidth: 'Chiều rộng nhãn',
        hideRequiredAsterisk: 'Ẩn dấu sao đỏ bên cạnh nhãn của trường bắt buộc',
        showMessage: 'Hiển thị thông báo lỗi xác minh',
        inlineMessage: 'Hiển thị thông tin xác nhận trực tuyến',
        submitBtn: 'Có hiển thị nút gửi biểu mẫu hay không',
        resetBtn: 'Có hiển thị nút đặt lại biểu mẫu hay không',
        appendChild: 'Chèn con',
        formMode: 'Chế độ biểu mẫu',
        formName: 'Tên biểu mẫu',
        componentMode: 'Thành phần',
        document: 'Tài liệu',
    },
    computed: {
        fieldUsed: '[{label}] Đang được sử dụng trong công thức tính, vui lòng sửa công thức tương ứng trước',
        fieldExist: '[{label}] Trường đã tồn tại',
        fieldEmpty: 'Trường là bắt buộc',
        fieldChar: 'Trường phải bắt đầu bằng một chữ cái',
    },
    validate: {
        type: 'Loại',
        typePlaceholder: 'Vui lòng chọn',
        trigger: 'Kích hoạt',
        mode: 'Phương pháp xác minh',
        modes: {
            required: 'bắt buộc',
            pattern: 'mẫu',
            validator: 'xác thực',
            min: 'tối thiểu',
            max: 'tối đa',
            len: 'độ dài',
        },
        types: {
            string: 'Chuỗi',
            array: 'Nhiều',
            number: 'Số',
            integer: 'Số nguyên',
            float: 'Số thực',
            object: 'Tập hợp',
            date: 'Ngày',
            url: 'Url',
            email: 'Email',
        },
        message: 'Lỗi',
        auto: 'Tự động',
        autoRequired: 'Vui lòng nhập {title}',
        autoMode: 'Vui lòng nhập đúng {title}',
        requiredPlaceholder: 'Vui lòng nhập',
        required: 'Có bắt buộc không',
        rule: 'Xác thực',
    },
    tableOptions: {
        handle: 'Hoạt động',
        add: 'Thêm',
        empty1: 'Nhấp vào góc dưới bên phải',
        empty2: 'Nút để thêm cột',
        rmCol: 'Xóa cột hiện tại',
        rmRow: 'Xóa hàng hiện tại',
        splitRow: 'Tách thành các hàng',
        splitCol: 'Tách thành các cột',
        mergeBottom: 'Gộp xuống dưới',
        mergeRight: 'Gộp sang phải',
        addTop: 'Thêm cột trên cùng',
        addBottom: 'Thêm phần sau',
        addLeft: 'Thêm cột bên trái',
        addRight: 'Thêm cột bên phải',
        keyValue: 'key-value',
    },
    struct: {
        title: 'Chỉnh sửa',
        only: '[{label}] Chỉ được phép thêm một',
        errorMsg: 'Nội dung đầu vào sai cú pháp',
        configured: 'Đã cấu hình',
    },
    event: {
        title: 'Chỉnh sửa',
        create: 'Tạo mới',
        list: 'Danh sách',
        placeholder: 'Vui lòng nhập tên của sự kiện',
        saveMsg: 'Vui lòng lưu sự kiện hiện đang chỉnh sửa',
        type: 'Loại',
        info: 'Thông tin',
        label: 'Trường',
        inject: {
            api: 'API của biểu mẫu hiện tại',
            rule: 'Tạo quy tắc cho biểu mẫu hiện tại',
            self: 'Quy tắc tạo thành phần',
            option: 'Cấu hình biểu mẫu',
            args: 'Các tham số ban đầu của sự kiện',
        }
    },
    fetch: {
        title: 'Thiết lập dữ liệu',
        create: 'Tạo dữ liệu',
        config: 'Yêu cầu',
        action: 'Hành động',
        actionRequired: 'Vui lòng nhập liên kết chính xác',
        placeholder: 'Vui lòng nhập tên nguồn dữ liệu',
        method: 'Phương thức',
        data: 'Đính kèm',
        headers: 'Tiêu đề',
        parse: 'Xử lý',
        response: 'Dữ liệu trả về từ giao diện',
        onError: 'Khi lỗi',
        remote: 'Từ xa',
        static: 'Tĩnh',
        optionsType: {
            fetch: 'Fetch',
            struct: 'Tĩnh',
        }
    },
    style: {
        width: 'Chiều rộng',
        height: 'Chiều cao',
        color: 'Màu sắc',
        backgroundColor: 'Màu nền',
        margin: 'Lề',
        padding: 'Đệm',
        borderRadius: 'Bán kính đường viền',
        border: 'Đường viền',
        solid: 'Đặc',
        dashed: 'Gạch đứt',
        dotted: 'Chấm',
        double: 'Kép',
        opacity: 'Độ mờ',
        scale: 'Tỉ lệ',
        shadow: {
            name: 'Bóng',
            x: 'Dịch chuyển trục x',
            y: 'Dịch chuyển trục y',
            vague: 'Bán kính mờ',
            extend: 'Bán kính khuếch tán',
            inset: 'Vào trong',
            external: 'Ra ngoài',
            mode: 'Chế độ',
            classic: 'Cổ điển',
            flat: 'Phẳng',
            solid: 'Lập thể',
        },
        font: {
            name: 'Phông chữ',
            size: 'Kích cỡ',
            align: 'Căn chỉnh',
            height: 'Chiều cao dòng',
            spacing: 'Khoảng cách chữ',
            preview: 'Xem trước',
        },
        decoration: {
            name: 'Trang trí',
            underline: 'Gạch chân',
            'line-through': 'Gạch ngang',
            overline: 'Gạch trên',
        },
        weight: {
            name: 'Độ đậm phông chữ',
            300: 'Mỏng',
            400: 'Mặc định',
            500: 'Trung bình',
            700: 'Đậm',
        }
    },
    designer: {
        component: 'Thành phần',
        id: 'ID duy nhất',
        name: 'Số thứ tự',
        type: 'Loại',
        form: 'Biểu mẫu',
        style: 'Kiểu dáng',
        rule: 'Cơ sở',
        advanced: 'Nâng cao',
        props: 'Thuộc tính',
        validate: 'Xác thực',
        event: 'Sự kiện',
        clearWarn: 'Nó không thể được khôi phục sau khi xóa. Bạn có chắc chắn muốn xóa không?',
        childEmpty: 'Nhấp vào nút \\e789 ở góc dưới bên phải để thêm cột',
        dragEmpty: 'Kéo các thành phần từ danh sách bên trái vào đây',
        unload: 'Bạn có chắc chắn muốn rời khỏi trang hiện tại không?',
    },
    menu: {
        main: 'Cơ bản',
        aide: 'Hỗ trợ',
        layout: 'Bố cục',
        component: 'Thành phần',
        subform: 'Biểu mẫu con',
        tree: 'Cấu trúc'
    },
    props: {
        disabled: 'Vô hiệu hóa',
        time: 'Thời gian',
        email: 'Email',
        number: 'Số',
        globalData: 'Dữ liệu toàn cầu',
        mobile: 'Di động',
        pc: 'PC',
        reactive: 'Phản ứng',
        title: 'Tiêu đề',
        content: 'Nội dung',
        collection: 'Tập hợp',
        group: 'Nhóm',
        custom: 'Tùy chỉnh',
        change: 'Thay đổi',
        blur: 'Mờ',
        preview: 'Xem trước',
        clear: 'Xóa',
        cancel: 'Hủy',
        close: 'Đóng',
        ok: 'Đồng ý',
        save: 'Lưu',
        refresh: 'Làm mới',
        submit: 'Gửi',
        reset: 'Đặt lại',
        copy: 'Sao chép',
        delete: 'Xóa',
        hide: 'Ẩn',
        show: 'Hiển thị',
        position: 'Vị trí',
        render: 'Render',
        large: 'Lớn',
        default: 'Mặc định',
        small: 'Nhỏ',
        always: 'luôn',
        never: 'không bao giờ',
        hover: 'di chuột',
        click: 'nhấp',
        button: 'nút',
        year: 'năm',
        month: 'tháng',
        date: 'ngày',
        dates: 'các ngày',
        week: 'tuần',
        datetime: 'ngày giờ',
        'datetime-local': 'ngày giờ',
        datetimerange: 'phạm vi ngày giờ',
        daterange: 'phạm vi ngày',
        monthrange: 'phạm vi tháng',
        left: 'trái',
        right: 'phải',
        top: 'trên',
        text: 'văn bản',
        picture: 'hình ảnh',
        'picture-card': 'thẻ hình ảnh',
        center: 'trung tâm',
        vertical: 'dọc',
        horizontal: 'ngang',
        manage: 'Quản lý',
        key: 'khóa',
        name: 'Tên',
        value: 'giá trị',
        inputData: 'Giá trị mặc định',
        append: 'Thêm vào',
        options: 'Tùy chọn',
        option: 'Tùy chọn',
        callback: 'Callback',
        _self: 'Cửa sổ hiện tại',
        _blank: 'Cửa sổ mới',
        _parent: 'Cửa sổ cha',
        _top: 'Cửa sổ trên cùng',
    },
    com: {
        cascader: {
            name: 'Cascader',
            event: {
                expandChange: 'Được kích hoạt khi nút mở rộng thay đổi',
                removeTag: 'Trong chế độ chọn nhiều, kích hoạt khi Tag bị xóa'
            },
            props: {
                props: 'Tùy chọn',
                placeholder: 'Chỗ điền',
                disabled: 'Vô hiệu hóa',
                clearable: 'Có hỗ trợ xóa tùy chọn hay không',
                showAllLevels: 'Có hiển thị toàn bộ đường dẫn của giá trị đã chọn trong ô nhập hay không',
                collapseTags: 'Có thu gọn các Tag trong chế độ chọn nhiều hay không',
                collapseTagsTooltip: 'Có hiển thị tất cả các thẻ được chọn khi di chuột qua văn bản của thẻ thu gọn hay không',
                separator: 'Ký tự phân cách',
                filterable: 'Có thể tìm kiếm tùy chọn này hay không',
                tagType: 'Loại',
            },
            propsOpt: {
                multiple: 'Có chọn nhiều không',
                expandTrigger: 'Cách để mở rộng menu phụ',
                checkStrictly: 'Có tuân thủ nghiêm ngặt rằng các nút cha và con không liên quan đến nhau hay không',
                emitPath: 'Khi nút đã chọn thay đổi, có trả về một mảng chứa giá trị của menu ở mỗi cấp mà nút nằm trong hay không',
                value: 'Giá trị của tùy chọn được chỉ định là giá trị thuộc tính của đối tượng tùy chọn',
                label: 'Chỉ định nhãn của tùy chọn làm giá trị thuộc tính của đối tượng tùy chọn',
                children: 'Tùy chọn con của tùy chọn được chỉ định là giá trị thuộc tính của đối tượng tùy chọn',
                disabled: 'Tùy chọn được chỉ định bị vô hiệu hóa làm giá trị thuộc tính của đối tượng tùy chọn',
                leaf: 'Bit cờ của nút lá của tùy chọn được chỉ định là giá trị thuộc tính của đối tượng tùy chọn',
            }
        },
        checkbox: {
            name: 'Hộp kiểm',
            props: {
                input: 'Có điền vào không',
                type: 'Loại',
                disabled: 'Vô hiệu hóa',
                min: 'Số lượng tối thiểu có thể chọn',
                max: 'Số lượng tối đa có thể chọn',
                textColor: 'Màu chữ khi nút được kích hoạt',
                fill: 'Màu viền và nền khi nút được kích hoạt'
            }
        },
        col: {
            name: 'Cột',
            props: {
                span: 'Số cột chiếm bởi lưới',
                offset: 'Số khoảng trống bên trái của lưới',
                push: 'Dịch chuyển lưới sang phải theo số ô',
                pull: 'Dịch chuyển lưới sang trái theo số ô'
            }
        },
        colorPicker: {
            name: 'Bảng chọn màu',
            event: {
                activeChange: 'Được kích hoạt khi màu hiển thị hiện tại trong bảng thay đổi'
            },
            props: {
                disabled: 'Vô hiệu hóa',
                showAlpha: 'Có hỗ trợ chọn độ trong suốt hay không',
                colorFormat: 'Định dạng màu',
                predefine: 'Màu được định trước',
            }
        },
        datePicker: {
            name: 'Chọn ngày',
            props: {
                pickerOptions: 'Tùy chọn cụ thể cho trình chọn ngày và giờ hiện tại',
                readonly: 'Chỉ đọc',
                disabled: 'Vô hiệu hóa',
                type: 'Loại',
                editable: 'Có thể nhập vào ô văn bản',
                clearable: 'Có hiển thị nút xóa hay không',
                placeholder: 'Nội dung chỗ điền cho lựa chọn không phải phạm vi',
                startPlaceholder: 'Nội dung chỗ điền cho ngày bắt đầu khi chọn phạm vi',
                endPlaceholder: 'Nội dung chỗ điền cho ngày kết thúc khi chọn phạm vi',
                format: 'Định dạng hiển thị trong ô nhập',
                align: 'Căn chỉnh',
                rangeSeparator: 'Ký tự phân cách khi chọn phạm vi',
                unlinkPanels: 'Không liên kết hai bảng chọn ngày trong bộ chọn phạm vi',
            }
        },
        dateRange: {
            name: 'Phạm vi ngày',
        },
        timeRange: {
            name: 'Phạm vi thời gian',
        },
        elAlert: {
            name: 'Thông báo',
            description: 'Mô tả',
            props: {
                title: 'Tiêu đề',
                type: 'Loại',
                description: 'Văn bản hỗ trợ',
                closable: 'Có thể đóng hay không',
                center: 'Có căn giữa văn bản hay không',
                closeText: 'Văn bản tùy chỉnh của nút đóng',
                showIcon: 'Có hiển thị biểu tượng hay không',
                effect: 'Chọn một chủ đề đã cung cấp'
            }
        },
        elButton: {
            name: 'Nút',
            props: {
                formCreateChild: 'Nội dung',
                size: 'Kích thước',
                type: 'Loại',
                plain: 'Nút có phải nút đơn giản hay không',
                round: 'Nút có bo góc hay không',
                circle: 'Nút có hình tròn hay không',
                loading: 'Có trạng thái đang tải hay không',
                disabled: 'Vô hiệu hóa',
            }
        },
        elCard: {
            name: 'Thẻ',
            props: {
                header: 'Tiêu đề',
                shadow: 'Thời điểm hiển thị bóng'
            }
        },
        elCollapse: {
            name: 'Thu gọn',
            event: {
                change: 'Chuyển đổi bảng đang hoạt động, loại của nó là chuỗi trong chế độ accordion và mảng trong các chế độ khác',
            },
            props: {
                accordion: 'Có ở chế độ accordion hay không'
            }
        },
        elCollapseItem: {
            name: 'Mục Thu gọn',
            props: {
                title: 'Tiêu đề bảng',
                name: 'Mã định danh',
                disabled: 'Vô hiệu hóa',
            }
        },
        elDivider: {
            name: 'Dấu phân cách',
            props: {
                formCreateChild: 'Thiết lập nội dung',
                contentPosition: 'Thiết lập vị trí nội dung'
            }
        },
        elTabPane: {
            name: 'TabPane',
            props: {
                label: 'Tiêu đề',
                disabled: 'Vô hiệu hóa',
                name: 'Mã định danh của tab',
                lazy: 'Có hoãn lại việc hiển thị tab không'
            }
        },

                elTabs: {
            name: 'Tabs',
            event: {
                tabClick: 'Được kích hoạt khi tab được chọn',
                tabChange: 'Được kích hoạt khi activeName thay đổi',
                tabRemove: 'Được kích hoạt khi nút xóa tab được nhấp vào',
                tabAdd: 'Được kích hoạt khi nút tab mới được nhấp vào',
                edit: 'Được kích hoạt sau khi nhấp vào nút thêm hoặc xóa tab',
            },
            props: {
                type: 'Loại',
                closable: 'Có thể đóng nhãn không',
                tabPosition: 'Vị trí tab',
                stretch: 'Có tự kéo dài độ rộng của nhãn không'
            }
        },
        elTag: {
            name: 'Nhãn',
            props: {
                formCreateNative: 'Có hiển thị tiêu đề không',
                formCreateTitle: 'Tiêu đề',
                formCreateChild: 'Nội dung',
                type: 'Loại',
                size: 'Kích thước nhãn',
                effect: 'Chủ đề nhãn',
                closable: 'Có thể đóng không',
                disableTransitions: 'Có vô hiệu hóa hoạt ảnh gradient không',
                hit: 'Có viền ngoài không',
                round: 'Có tròn không',
                color: 'Màu nền'
            }
        },
        elTransfer: {
            name: 'Chuyển đổi',
            event: {
                leftCheckChange: 'Kích hoạt khi phần tử trong danh sách bên trái được chọn/hủy chọn bởi người dùng',
                rightCheckChange: 'Kích hoạt khi phần tử trong danh sách bên phải được chọn/hủy chọn bởi người dùng'
            },
            props: {
                filterable: 'Có thể tìm kiếm không',
                filterPlaceholder: 'Chỗ điền của hộp tìm kiếm',
                targetOrder: 'Chiến lược sắp xếp các phần tử trong danh sách bên phải',
                targetOrderInfo: 'Nếu là original, giữ nguyên thứ tự như dữ liệu; nếu là push, phần tử mới thêm sẽ được xếp cuối; nếu là unshift, phần tử mới thêm sẽ được xếp đầu',
                titles: 'Tiêu đề',
                buttonTexts: 'Thiết lập nội dung nút',
                props: 'Tên thay thế cho trường dữ liệu nguồn'
            }
        },
        elTreeSelect: {
            name: 'TreeSelect',
            event: {
                removeTag: 'Được kích hoạt khi thẻ bị xóa trong chế độ chọn nhiều'
            },
            props: {
                multiple: 'Có chọn nhiều không',
                disabled: 'Vô hiệu hóa',
                clearable: 'Có thể xóa tùy chọn không',
                collapseTags: 'Có hiển thị giá trị đã chọn dưới dạng văn bản khi chọn nhiều không',
                multipleLimit: 'Số mục tối đa mà người dùng có thể chọn khi chọn nhiều, nếu bằng 0 thì không giới hạn',
                placeholder: 'Chỗ điền',
                props: 'Tùy chọn',
                renderAfterExpand: 'Có hiển thị các nút con sau khi mở nút cây lần đầu không',
                defaultExpandAll: 'Có mở rộng tất cả các nút mặc định không',
                expandOnClickNode: 'Có mở rộng hay thu nhỏ các nút khi nhấp vào không',
                checkOnClickNode: 'Có chọn nút khi nhấp vào không',
                nodeKey: 'Mỗi nút cây được dùng làm thuộc tính để định danh duy nhất, toàn bộ cây phải là duy nhất'
            }
        },
        fcEditor: {
            name: 'Trình soạn thảo',
            props: {
                disabled: 'Vô hiệu hóa'
            }
        },
        fcRow: {
            name: 'Hàng',
            props: {
                gutter: 'Khoảng cách giữa các lưới',
                type: 'Chế độ bố cục Flex',
                justify: 'Sắp xếp ngang trong bố cục flex',
                align: 'Sắp xếp dọc trong bố cục flex'
            }
        },
        fcTable: {
            name: 'Bảng',
            props: {
                border: 'Có hiển thị đường viền không',
                borderColor: 'Màu đường viền',
                borderWidth: 'Độ rộng đường viền'
            }
        },
        fcTableGrid: {
            name: 'Lưới',
        },
        group: {
            name: 'Biểu mẫu con',
            props: {
                disabled: 'Vô hiệu hóa',
                syncDisabled: 'Có buộc đồng bộ trạng thái vô hiệu hóa với biểu mẫu con không',
                expand: 'Thiết lập mục mở rộng mặc định',
                button: 'Có hiển thị nút thao tác không',
                sortBtn: 'Có hiển thị nút sắp xếp không',
                min: 'Thiết lập số lượng mục tối thiểu để thêm',
                max: 'Thiết lập số lượng mục tối đa để thêm',
            }
        },
        html: {
            name: 'HTML',
            props: {
                formCreateNative: 'Có hiển thị tiêu đề không',
                formCreateTitle: 'Tiêu đề',
                formCreateChild: 'Nội dung',
            }
        },
        input: {
            name: 'Nhập liệu',
            event: {
                change: 'Được kích hoạt khi giá trị thay đổi, khi thành phần mất tiêu điểm hoặc người dùng nhấn Enter',
            },
            props: {
                type: 'Loại',
                maxlength: 'Độ dài đầu vào tối đa',
                minlength: 'Độ dài đầu vào tối thiểu',
                placeholder: 'Chỗ điền',
                clearable: 'Có hiển thị nút xóa không',
                disabled: 'Vô hiệu hóa',
                readonly: 'Chỉ đọc',
            }
        },
        inputNumber: {
            name: 'Nhập số',
            props: {
                precision: 'Độ chính xác của giá trị nhập',
                min: 'Thiết lập giá trị tối thiểu cho bộ đếm',
                max: 'Thiết lập giá trị tối đa cho bộ đếm',
                step: 'Bước',
                stepStrictly: 'Chỉ cho phép nhập bội số của bước hay không',
                disabled: 'Vô hiệu hóa',
                controls: 'Có sử dụng nút điều khiển không',
                controlsPosition: 'Vị trí của nút điều khiển',
                placeholder: 'Chỗ điền'
            }
        },
        password: {
            name: 'Mật khẩu',
            event: {
                change: 'Được kích hoạt khi giá trị thay đổi, khi thành phần mất tiêu điểm hoặc người dùng nhấn Enter',
            },
            props: {
                disabled: 'Vô hiệu hóa',
                readonly: 'Chỉ đọc',
                maxlength: 'Độ dài đầu vào tối đa',
                minlength: 'Độ dài đầu vào tối thiểu',
                placeholder: 'Chỗ điền',
                clearable: 'Có hiển thị nút xóa không'
            }
        },
        radio: {
            name: 'Radio',
            props: {
                input: 'Có điền vào không',
                disabled: 'Vô hiệu hóa',
                type: 'Loại',
                textColor: 'Màu văn bản khi nút được kích hoạt',
                fill: 'Màu nền và viền khi nút được kích hoạt'
            }
        },

                rate: {
            name: 'Đánh giá',
            props: {
                max: 'Điểm tối đa',
                disabled: 'Vô hiệu hóa',
                allowHalf: 'Có cho phép chọn một nửa không',
                voidColor: 'Màu của biểu tượng khi không được chọn',
                disabledVoidColor: 'Màu của biểu tượng khi không được chọn khi ở chế độ chỉ đọc',
                voidIconClass: 'Tên lớp của biểu tượng khi không được chọn',
                disabledVoidIconClass: 'Tên lớp của biểu tượng khi không được chọn khi ở chế độ chỉ đọc',
                showScore: 'Có hiển thị điểm hiện tại không',
                textColor: 'Màu của văn bản hỗ trợ',
                scoreTemplate: 'Mẫu hiển thị điểm'
            }
        },
        select: {
            name: 'Chọn',
            event: {
                removeTag: 'Được kích hoạt khi thẻ bị xóa trong chế độ chọn nhiều'
            },
            props: {
                multiple: 'Có chọn nhiều không',
                disabled: 'Vô hiệu hóa',
                clearable: 'Có thể xóa tùy chọn không',
                collapseTags: 'Có hiển thị giá trị đã chọn dưới dạng văn bản khi chọn nhiều không',
                multipleLimit: 'Số mục tối đa mà người dùng có thể chọn khi chọn nhiều, nếu bằng 0 thì không giới hạn',
                placeholder: 'Chỗ điền',
                filterable: 'Có thể tìm kiếm không',
                allowCreate: 'Có cho phép người dùng tạo mục mới không',
                noMatchText: 'Văn bản hiển thị khi không có điều kiện tìm kiếm phù hợp',
                noDataText: 'Văn bản hiển thị khi tùy chọn trống',
                reserveKeyword: 'Khi chọn nhiều có thể tìm kiếm, có giữ lại từ khóa tìm kiếm hiện tại sau khi chọn một tùy chọn không',
                defaultFirstOption: 'Nhấn Enter trong ô nhập và chọn mục phù hợp đầu tiên',
                remote: 'Có tải tùy chọn từ xa từ máy chủ không',
                remoteMethod: 'Phương thức tìm kiếm từ xa tùy chỉnh',
            }
        },
        slider: {
            name: 'Thanh trượt',
            props: {
                min: 'Giá trị tối thiểu',
                max: 'Giá trị tối đa',
                disabled: 'Vô hiệu hóa',
                step: 'Bước',
                showInput: 'Có hiển thị ô nhập không, chỉ có hiệu lực khi không chọn phạm vi',
                showInputControls: 'Có hiển thị nút điều khiển của ô nhập khi hiển thị ô nhập không',
                showStops: 'Có hiển thị điểm ngắt không',
                range: 'Có phải là lựa chọn phạm vi không',
                vertical: 'Có ở chế độ chân dung không',
                height: 'Chiều cao thanh trượt, cần thiết trong chế độ chân dung'
            }
        },
        space: {
            name: 'Khoảng cách',
            props: {
                height: 'Chiều cao',
            }
        },
        subForm: {
            name: 'Nhóm',
            props: {
                disabled: 'Vô hiệu hóa',
                syncDisabled: 'Có buộc đồng bộ trạng thái vô hiệu hóa với biểu mẫu con không'
            }
        },
        switch: {
            name: 'Công tắc',
            props: {
                disabled: 'Vô hiệu hóa',
                width: 'Chiều rộng (px)',
                activeText: 'Mô tả văn bản khi bật',
                inactiveText: 'Mô tả văn bản khi tắt',
                activeValue: 'Giá trị khi bật',
                inactiveValue: 'Giá trị khi tắt',
                activeColor: 'Màu nền khi bật',
                inactiveColor: 'Màu nền khi tắt'
            }
        },
        tableForm: {
            name: 'Bảng biểu mẫu',
            props: {
                disabled: 'Vô hiệu hóa',
                max: 'Số hàng tối đa có thể thêm, nếu bằng 0 thì không giới hạn',
            }
        },
        tableFormColumn: {
            name: 'Cột bảng biểu mẫu',
            label: 'Cột bảng biểu mẫu',
            props: {
                label: 'Tiêu đề',
                width: 'Chiều rộng',
                color: 'Màu'
            }
        },
        text: {
            name: 'Văn bản',
            props: {
                formCreateNative: 'Có hiển thị tiêu đề không',
                formCreateTitle: 'Tiêu đề',
                formCreateChild: 'Nội dung'
            }
        },
        textarea: {
            name: 'Textarea',
            event: {
                change: 'Được kích hoạt khi giá trị thay đổi, khi thành phần mất tiêu điểm hoặc người dùng nhấn Enter',
            },
            props: {
                disabled: 'Vô hiệu hóa',
                readonly: 'Chỉ đọc',
                maxlength: 'Độ dài đầu vào tối đa',
                minlength: 'Độ dài đầu vào tối thiểu',
                showWordLimit: 'Có hiển thị thống kê số từ không',
                placeholder: 'Chỗ điền',
                rows: 'Số hàng của ô nhập',
                autosize: 'Có tự động điều chỉnh chiều cao không'
            }
        },
        timePicker: {
            name: 'Chọn thời gian',
            props: {
                pickerOptions: 'Tùy chọn cụ thể cho trình chọn ngày và giờ hiện tại',
                readonly: 'Chỉ đọc',
                disabled: 'Vô hiệu hóa',
                editable: 'Có thể nhập vào ô văn bản',
                clearable: 'Có hiển thị nút xóa không',
                placeholder: 'Nội dung chỗ điền cho lựa chọn không phải phạm vi',
                startPlaceholder: 'Nội dung chỗ điền cho ngày bắt đầu khi chọn phạm vi',
                endPlaceholder: 'Nội dung chỗ điền cho ngày bắt đầu khi chọn phạm vi',
                isRange: 'Có chọn phạm vi thời gian không',
                arrowControl: 'Có sử dụng mũi tên để chọn thời gian không',
                align: 'Căn chỉnh'
            }
        },
        tree: {
            name: 'Cây',
            event: {
                nodeClick: 'Được kích hoạt khi nút được nhấp vào',
                nodeContextmenu: 'Sự kiện này sẽ được kích hoạt khi một nút bị nhấp chuột phải',
                checkChange: 'Được kích hoạt khi ô kiểm được nhấp vào',
                check: 'Được kích hoạt sau khi nhấp vào ô kiểm của nút',
                currentChange: 'Sự kiện được kích hoạt khi nút hiện tại được chọn thay đổi',
                nodeExpand: 'Sự kiện được kích hoạt khi một nút được mở rộng',
                nodeCollapse: 'Sự kiện được kích hoạt khi một nút bị đóng',
                nodeDragStart: 'Sự kiện được kích hoạt khi một nút bắt đầu kéo',
                nodeDragEnter: 'Sự kiện được kích hoạt khi kéo vào các nút khác',
                nodeDragLeave: 'Sự kiện được kích hoạt khi kéo ra khỏi nút',
                nodeDragOver: 'Sự kiện được kích hoạt khi kéo một nút',
                nodeDragEnd: 'Sự kiện được kích hoạt khi kéo kết thúc',
                nodeDrop: 'Sự kiện được kích hoạt khi kéo và thả thành công hoàn tất'
            },
            props: {
                emptyText: 'Văn bản hiển thị khi nội dung trống',
                props: 'Tùy chọn',
                renderAfterExpand: 'Có hiển thị các nút con sau khi mở nút cây lần đầu không',
                defaultExpandAll: 'Có mở rộng tất cả các nút mặc định không',
                expandOnClickNode: 'Có mở rộng hoặc thu nhỏ nút khi nhấp vào không, nếu là false, nút sẽ chỉ mở rộng hoặc thu nhỏ khi nhấp vào biểu tượng mũi tên.',
                checkOnClickNode: 'Có chọn nút khi nhấp vào không',
                autoExpandParent: 'Có tự động mở rộng nút cha khi mở rộng nút con không',
                checkStrictly: 'Khi hiển thị hộp kiểm, có tuân thủ nghiêm ngặt rằng cha và con không liên quan đến nhau không',
                accordion: 'Có chỉ mở một nút cây anh em để mở rộng tại một thời điểm không',
                indent: 'Khoảng cách ngang (px) giữa các nút cấp liền kề',
                nodeKey: 'Mỗi nút cây được dùng làm thuộc tính để định danh duy nhất, toàn bộ cây phải là duy nhất'
            }
        },
        upload: {
            name: 'Tải lên',
            info: 'Gán url trả về từ giao diện vào file.url trong phương thức onSuccess',
            event: {
                remove: 'Được kích hoạt khi một tệp được xóa khỏi danh sách tệp',
            },
            props: {
                listType: 'Loại tải lên',
                multiple: 'Có hỗ trợ chọn nhiều tệp không',
                action: 'Địa chỉ tải lên (bắt buộc)',
                beforeUpload: 'Hook trước khi tải lên tệp',
                onSuccess: 'Callback khi tải lên thành công',
                headers: 'Thiết lập tiêu đề yêu cầu tải lên',
                data: 'Tham số đính kèm khi tải lên',
                name: 'Tên trường của tệp tải lên',
                withCredentials: 'Hỗ trợ gửi thông tin xác thực cookie',
                accept: 'Chấp nhận các loại tệp tải lên',
                autoUpload: 'Có tự động tải lên tệp sau khi chọn không',
                disabled: 'Vô hiệu hóa',
                limit: 'Số lượng tải lên tối đa được cho phép'
            }
        }
    },
};
export default ZhCn;

